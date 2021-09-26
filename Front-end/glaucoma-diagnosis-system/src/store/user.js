import axios from "axios";

const api = 'https://glaucoma-diagnosis-aait.herokuapp.com'

const userModule = {
  namespaced: true,
  state: {
    userLoader: ""
  },

  mutations: {
    setUserLoader: (state, payload) => state.userLoader = payload,
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
          localStorage.setItem('user', JSON.stringify(newUser));          
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
