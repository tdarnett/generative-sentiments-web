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
  },
  getters: {
    label: (state) => {
      return state.response && state.response.label;
    },
    sentence: (state) => {
      return state.response && state.response.sentence;
    },
    backgroundColor: (state) => {
      let rgbValues = 'rgb(28,166,121)'; // default background

      if (state.response.label) {
        let bg = LABEL_ARTWORK_WRITER_MAP[state.response.label].background;
        rgbValues = `rgb(${bg.r},${bg.g},${bg.b})`;
      }

      return {
        backgroundColor: rgbValues,
      };
    },
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
