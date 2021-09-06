import axios from "axios";

const diagnoseModule = {
  state: {
    predictionResult: {},
    predictionLoader: false
  },

  mutations: {
    setPredictionResult: (state, payload) => state.predictionResult = payload,
    setPredictionLoader: (state, payload) => state.predictionLoader = payload
  },
  
  actions: {
    fetchPredictionResult: ({ commit }, img_url ) => {
      commit("setPredictionLoader", true);
      const api =
        "https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/d74c4bc4-30bd-4477-ad1d-f5e30e90600d/classify/iterations/glaucoma/url";
      const headers = {
        "Content-Type": "application/json",
        "Prediction-Key": "4d317fce897d495ea95ea0f104e37c1f",
      };
      axios
        .post(
          api,
          {
            Url: img_url,
          },
          {
            headers: headers,
          }
        )
        .then((response) => {
          commit("setPredictionResult", response.data.predictions[0]);
          console.log(response.data.predictions[0]);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          commit("setPredictionLoader", false);
        });
    }
  }
};

export default diagnoseModule;
