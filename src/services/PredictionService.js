import axios from 'axios';

const PREDICTION_URL =
  'https://generative-sentiments-rtjfahbj2q-uc.a.run.app/predict/';

export default {
  async getPrediction(sentence) {
    let body = {
      sentence,
    };
    let res = await axios.post(PREDICTION_URL, body);

    return res.data;
  },
};
