<script>
import PredictionService from '@/services/PredictionService.js';
import { Loading } from 'element-ui';

export default {
  name: 'SentimentInput',
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        sentiment: '',
      },
    };
  },
  methods: {
    async getPredictionData(event) {
      let sentence = event.target.elements.sentiment.value; // grab sentence from input
      if (sentence) {
        // initialize loader singleton
        let loader = Loading.service({
          background: true,
        });
        let data = await PredictionService.getPrediction(sentence);
        loader.close();

        this.$store.commit('updateResponse', data);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sentiment-input {
  width: 50vh;
  font-size: 18pt;
}
</style>

<template>
  <el-form ref="form" :model="form" @submit.native.prevent="getPredictionData">
    <el-form-item>
      <el-input
        class="sentiment-input"
        :placeholder="msg"
        v-model="form.sentiment"
        type="text"
        :show-word-limit="true"
        maxlength="50"
        name="sentiment"
        :disabled="Boolean(this.$store.getters.label)"
      />
    </el-form-item>
  </el-form>
</template>
