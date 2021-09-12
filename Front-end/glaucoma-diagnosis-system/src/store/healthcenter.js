import axios from "axios";

const api = 'https://aait-glaucoma-diagnosis.herokuapp.com'

const healthcenterModule = {
  namespaced: true,
  state: {
    allHealthcenters: [],
    healthcenterLoader: false,
    registerResult: "",
    registerLoader: false,
    actionLoader: "",
  },

  getters: {
    granted: (state) => state.allHealthcenters.filter((healthcenter) => healthcenter.isGranted === true),
    requested: (state) => state.allHealthcenters.filter((healthcenter) => healthcenter.isGranted === false)
  },

  mutations: {
    setAllHealthcenters: (state, payload) => state.allHealthcenters = payload,
    setHealthcenterLoader: (state, payload) => state.healthcenterLoader = payload,
    setRegisterResult: (state, payload) => state.registerResult = payload,
    setRegisterLoader: (state, payload) => state.registerLoader = payload,
    setActionLoader: (state, payload) => state.actionLoader = payload
  },

  actions: {
    registerHealthcenter: async ({ commit }, healthcenter) => {
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
    },

    fetchAllHealthcenters: async ({ commit }) => {
      commit("setHealthcenterLoader", true);
      try {
        const response = await axios.get(`${api}/healthcenter`);
        commit("setAllHealthcenters", response.data.healthcenters);
        console.log(response.data.healthcenters);
      } catch (error) {
        console.error(error);
      } finally {
        commit("setHealthcenterLoader", false);
      }
    },

    // TODO: implement this on backend
    deleteHealthcenter: async ({ commit }, healthcenterId) => {
      commit("setActionLoader", true);
      try {
        const response = await axios.delete(`${api}/healthcenter/${healthcenterId}`);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        commit("setActionLoader", false);
      }
    },

    grantAccess: async ({ commit }, healthcenterId) => {
      commit("setActionLoader", healthcenterId);
      try {
        const response = await axios.put(`${api}/healthcenter/${healthcenterId}`, { isGranted: true });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        commit("setActionLoader", "");
      }
    }
  }
};

export default healthcenterModule;
