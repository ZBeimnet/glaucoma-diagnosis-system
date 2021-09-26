import axios from "axios";

const api = 'https://glaucoma-diagnosis-aait.herokuapp.com'

const userModule = {
  namespaced: true,
  state: {
    user: {
        email: "",
        role: "",
        healthcenter: ""
    },
    userLoader: "",
    isLoggedIn: false
  },

  mutations: {
    setUser: (state, payload) => state.user = payload,
    setUserLoader: (state, payload) => state.userLoader = payload,
    setIsLoggedIn: (state, payload) => state.isLoggedIn = payload,
    setLogout: (state) => {
        state.user = {
            email: "",
            role: "",
            healthcenter: ""
        };
        state.isLoggedIn = false;
    }
  },

  actions: {
    registerUser: async ({ commit }, user) => {
      commit("setUserLoader", true);
      try {
        const response = await axios.post(`${api}/users/signup`, user);
        console.log(response);
      } catch(error) {
        throw(error);
      } finally {
        commit("setUserLoader", false);
      }
    },

    login: async ({ commit }, user) => {
        commit("setUserLoader", true);
        try {
          const response = await axios.post(`${api}/users/login`, user);
          if (response.data.User.healthcenter.isGranted === false) {
            throw new Error("Not Approved!");  
          }
          const newUser = {
            email: "",
            role: "",
            healthcenter: ""
          };
          newUser.role = response.data.User.role;
          newUser.email = response.data.User.email;
          newUser.healthcenter = response.data.User.healthcenter._id;
          commit("setUser", newUser);
          commit("setIsLoggedIn", true);
          console.log(response.data);
        } catch(error) {
          if (error.message === "Not Approved!") {
            throw(error);
          }
          throw new Error("Wrong User Credentials!");
        } finally {
          commit("setUserLoader", false);
        }
      }
  }
};

export default userModule;
