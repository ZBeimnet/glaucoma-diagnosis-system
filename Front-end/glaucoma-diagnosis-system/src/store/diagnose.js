import axios from "axios";

const diagnose_api =
        "https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/be7bc8fb-1b8c-4152-a246-f188f6bc052d/classify/iterations/Iteration1/url";
const upload_api = "https://api.cloudinary.com/v1_1/dimhrk8pt/image/upload";

const diagnoseModule = {
  namespaced: true,
  state: {
    predictionResult: {},
    predictionLoader: false,
    imageUrl: ""
  },

  mutations: {
    setPredictionResult: (state, payload) => state.predictionResult = payload,
    setPredictionLoader: (state, payload) => state.predictionLoader = payload,
    setImageUrl: (state, payload) => state.imageUrl = payload,
    setStateDefault: (state) => {
      state.predictionResult = {};
      state.predictionLoader = false;
      state.imageUrl = "";
    }
  },
  
  actions: {
    fetchPredictionResult: async ({ commit, dispatch, state }, formData ) => {
      commit("setPredictionLoader", true);
      const headers = {
        "Content-Type": "application/json",
        "Prediction-Key": "8fc6a0a8d5a441548884b09f94707f35",
      };
      try {
        await dispatch("uploadImage", formData);
        const response = await axios.post(diagnose_api, { Url: state.imageUrl }, { headers: headers });
        commit("setPredictionResult", response.data.predictions[0]);
        console.log(response.data.predictions[0]);
      } catch(error) {
        console.error(error);
      } finally {
        commit("setPredictionLoader", false);
      }
    },

    uploadImage: async ({ commit }, formData) => {
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      try {
        const response = await axios.post(upload_api, formData, headers);
        commit("setImageUrl", response.data.secure_url);
      } catch(error) {
        throw error;
      }
    }
  }
};

export default diagnoseModule;
