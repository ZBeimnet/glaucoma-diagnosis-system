import axios from "axios";

const api = 'https://glaucoma-diagnosis-aait.herokuapp.com'

const patientModule = {
  namespaced: true,
  state: {
    allPatients: [],
    patientsByHealthcenter: [],
    singlePatient: {patientresult: []},
    patientLoader: false,
    registerLoader: false,
  },

  getters: {
    patientCount: (state) => state.allPatients.filter((patient) => patient.patientresult.length !== 0).length,
    glaucomatous: (state) => state.allPatients.filter(function(patient) {
      if (patient.patientresult.length === 0) {
        return false;
      }
      return patient.patientresult[0].doctorFinalDecision === "Glaucoma Positive";
    }).length,
    nonGlaucomatous: (state) => state.allPatients.filter(function(patient) {
      if (patient.patientresult.length === 0) {
        return false;
      }
      return patient.patientresult[0].doctorFinalDecision === "Glaucoma Negative";
    }).length,
    hcPatientCount: (state) => state.patientsByHealthcenter.filter((patient) => patient.patientresult.length !== 0).length,
    hcGlaucomatous: (state) => state.patientsByHealthcenter.filter(function(patient) {
      if (patient.patientresult.length === 0) {
        return false;
      }
      return patient.patientresult[0].doctorFinalDecision === "Glaucoma Positive";
    }).length,
    hcNonGlaucomatous: (state) => state.patientsByHealthcenter.filter(function(patient) {
      if (patient.patientresult.length === 0) {
        return false;
      }
      return patient.patientresult[0].doctorFinalDecision === "Glaucoma Negative";
    }).length,
    adminChartData: function(state) {
      let regions = new Object();
      for (let key in state.allPatients) {
        let patient = state.allPatients[key];
        if (patient.region in regions) {
          console.log(patient.region);
          if (patient.isDiagnosed) {
            regions[patient.region][0] += 1;
            if (patient.patientresult[0].doctorFinalDecision === "Glaucoma Positive") {
              regions[patient.region][1] += 1;
            }
          }
        } else {
          regions[patient.region] = [0, 0];
          if (patient.isDiagnosed) {
            regions[patient.region][0] += 1;
            if (patient.patientresult[0].doctorFinalDecision === "Glaucoma Positive") {
              regions[patient.region][1] += 1;
            }
          }
        }
      }
      let labels = ["Addis Ababa", "Afar", "Amhara", "Benishangul", "Dire Dawa", "Gambela", "Harari", "Oromia", "Tigray", "SNNPR"];
      let chartData = {
        total: [],
        glaucomatous: []
      };
      for (let region in labels) {
        if (labels[region] in regions) {
          chartData.total.push(regions[labels[region]][0]);
          chartData.glaucomatous.push(regions[labels[region]][1]);
        } else {
          chartData.total.push(0);
          chartData.glaucomatous.push(0);
        }
      }
      console.log(chartData);
      return chartData;
    }
  },

  mutations: {
    setAllPatients: (state, payload) => state.allPatients = payload,
    setPatientsByHealthcenter: (state, payload) => state.patientsByHealthcenter = payload,
    setPatientLoader: (state, payload) => state.patientLoader = payload,
    setRegisterResult: (state, payload) => state.registerResult = payload,
    setRegisterLoader: (state, payload) => state.registerLoader = payload,
    setSinglePatient: (state, payload) => state.singlePatient = payload
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

    fetchAllPatients: async ({ commit }, { query }) => {
      commit("setPatientLoader", true);
      try {
        const response = await axios.get(`${api}/patients/?${query}`);
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
      } catch(error) {
        throw error;
      } finally {
        commit("setPatientLoader", false);
      }
    },

    fetchPatientsByHealthcenter: async ({ commit }, { healthcenterId, query }) => {
      commit("setPatientLoader", true);
      try {
        const response = await axios.get(`${api}/patients/healthcenter/${healthcenterId}/?${query}`);
        commit("setPatientsByHealthcenter", response.data.patientsByhealthcenter);
        console.log(response.data.patientsByhealthcenter);
      } catch(error) {
        throw error;
      } finally {
        commit("setPatientLoader", false);
      }
    },

    fetchSinglePatient: async ({ commit }, patientId) => {
      commit("setPatientLoader", true);
      try {
        const response = await axios.get(`${api}/patients/${patientId}`);
        commit("setSinglePatient", response.data.Patient);
        console.log(response.data.Patient);
      } catch(error) {
        throw error;
      } finally {
        commit("setPatientLoader", false);
      }
    },

    updatePatient: async ({ commit }, patient) => {
      commit("setPatientLoader", true);
      try {
        const response = await axios.put(`${api}/patients/${patient._id}`, patient);
        commit("setSinglePatient", response.data.updatePatient);
        console.log(response.data.updatePatient);
      } catch(error) {
        throw error;
      } finally {
        commit("setPatientLoader", false);
      }
    }
  }
};

export default patientModule;
