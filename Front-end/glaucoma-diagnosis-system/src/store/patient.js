import axios from "axios";

const api = 'https://aait-glaucoma-diagnosis.herokuapp.com'

const patientModule = {
  namespaced: true,
  state: {
    allPatients: [],
    patientsByHealthcenter: [],
    patientLoader: false,
    registerLoader: false,
  },

  getters: {
    patientCount: (state) => state.allPatients.filter((patient) => patient.patientresult.length !== 0).length,
    glaucomatous: (state) => state.allPatients.filter(function(patient) {
      if (patient.patientresult.length === 0) {
        return false;
      }
      return patient.patientresult[0].doctorFinalDecision === "GlaucomaPositive";
    }).length,
    nonGlaucomatous: (state) => state.allPatients.filter(function(patient) {
      if (patient.patientresult.length === 0) {
        return false;
      }
      return patient.patientresult[0].doctorFinalDecision === "GlaucomaNegative";
    }).length,
  },

  mutations: {
    setAllPatients: (state, payload) => state.allPatients = payload,
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
        console.log(response);
      } catch(error) {
        throw error;
      } finally {
        commit("setRegisterLoader", false);
      }
    },

    fetchAllPatients: async ({ commit }) => {
      commit("setPatientLoader", true);
      try {
        const response = await axios.get(`${api}/patients`);
        commit("setAllPatients", response.data.allpatients);
        console.log(response.data.allpatients);
      } catch(error) {
        console.error(error);
      } finally {
        commit("setPatientLoader", false);
      }
    },

    searchPatient: async ({ commit }, patientInfo) => {
      commit("setPatientLoader", true);
      try {
        const response = await axios.post(`${api}/patients/search`, patientInfo);
        if (response.data.searchedpatient.length === 0) {
          throw new Error("Not Found");
        }
        console.log(response);
        // not implemented yet
        // await axios.put(`${api}/patients/${response.data.searchedpatient[0]._id}`, { isDiagnosed: false });
      } catch(error) {
        throw error;
      } finally {
        commit("setPatientLoader", false);
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
