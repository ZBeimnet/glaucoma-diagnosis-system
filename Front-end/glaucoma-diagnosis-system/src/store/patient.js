import axios from "axios";

const api = 'https://aait-glaucoma-diagnosis.herokuapp.com'

const patientModule = {
  namespaced: true,
  state: {
    allPatients: [],
    patientsByHealthcenter: [],
    patientLoader: false,
    registerResult: "",
    registerLoader: false,
  },

  mutations: {
    setPatientsByHealthcenter: (state, payload) => state.patientsByHealthcenter = payload,
    setPatientLoader: (state, payload) => state.patientLoader = payload,
    setRegisterResult: (state, payload) => state.registerResult = payload,
    setRegisterLoader: (state, payload) => state.registerLoader = payload
  },

  actions: {
    registerPatient: async ({ commit }, patient) => {
      commit("setRegisterLoader", true);
      try {
        const response = await axios.post(`${api}/patients`, patient)
        commit("setRegisterResult", "Success");
        console.log(response);
      } catch(error) {
        commit("setRegisterResult", "Error");
        console.error(error);
      } finally {
        commit("setRegisterLoader", false);
      }
       
    },

    fetchPatientsByHealthcenter: ({ commit }, healthcenterId) => {
      commit("setPatientLoader", true);
      axios
        .get(
          `${api}/${healthcenterId}/patients`
        )
        .then((response) => {
          commit("setPatientsByHealthcenter", response.data.allpatients);
          console.log(response.data.allpatients);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          commit("setPatientLoader", false);
        });
    }
  }
};

export default patientModule;
