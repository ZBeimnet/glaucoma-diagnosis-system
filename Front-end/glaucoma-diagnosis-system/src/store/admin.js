import axios from "axios";

const api = 'https://aait-glaucoma-diagnosis.herokuapp.com'

const adminModule = {
  namespaced: true,
  state: {
    registerResult: "",
    registerLoader: false,
  },

  mutations: {
    setRegisterResult: (state, payload) => state.registerResult = payload,
    setRegisterLoader: (state, payload) => state.registerLoader = payload
  },

  actions: {
    async registerHealthcenter ({ commit }, healthcenter) {
      commit("setRegisterLoader", true);

      try {
        const response = await axios.post(`${api}/healthcenter`, healthcenter);
        commit("setRegisterResult", "Success");
        console.log(response);
      } catch(error) {
        commit("setRegisterResult", "Error");
        console.error(response.status);
      } finally {
        commit("setRegisterLoader", false);
      }
      
    }
  }
};

export default adminModule;
