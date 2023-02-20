import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import './plugins/element.js';
import { LABEL_ARTWORK_WRITER_MAP } from './artwork/constants.js';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    response: {},
  },
  mutations: {
    updateResponse: (state, response) => (state.response = response),
    clearState: (state) => (Object.assign(state, {response: {}}))
  },
  getters: {
    label: (state) => {
      return state.response && state.response.label;
    },
    sentence: (state) => {
      return state.response && state.response.sentence;
    },
    confidence: (state) => {
      return state.response && state.response.confidence;
    },
    backgroundRGB: (state) => {
      let rgbValues = 'rgb(28,166,121)'; // default background

      if (state.response.label) {
        rgbValues = LABEL_ARTWORK_WRITER_MAP[state.response.label].background;
      }

      return rgbValues;
    },
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
