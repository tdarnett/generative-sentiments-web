// import axios from 'axios';

// const PREDICTION_URL =
//   'https://generative-sentiments-rtjfahbj2q-uc.a.run.app/predict/';

export default {
  async getPrediction(sentence) {
    // let body = {
    //   sentence,
    // };
    // let res = await axios.post(PREDICTION_URL, body);
    let res = { data: { confidence: '0.93', label: 'sadness', sentence } }; // TODO remove after testing
    await new Promise((r) => setTimeout(r, 1000));

    return res.data;
  },
};
