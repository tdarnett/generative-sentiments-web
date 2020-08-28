import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import './plugins/element.js';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
    response: {},
  },
  mutations: {
    toggleLoading: (state) => (state.isLoading = !state.isLoading),
    updateResponse: (state, response) => (state.response = response),
  },
  getters: {
    label: (state) => {
      return state.response && state.response.label;
    },
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
