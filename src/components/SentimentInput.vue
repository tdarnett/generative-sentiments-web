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
      />
    </el-form-item>
  </el-form>
</template>

<script>
import PredictionService from "@/services/PredictionService.js";
import { Loading } from "element-ui";

export default {
  name: "SentimentInput",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        sentiment: "",
      },
    };
  },
  methods: {
    async getPredictionData(event) {
      let sentence = event.target.elements.sentiment.value; // grab sentence from input
      if (sentence) {
        console.log(sentence); // TODO removce
        // initialize loader singleton
        let loader = Loading.service({
          background: true,
        });
        let data = await PredictionService.getPrediction(sentence);
        loader.close(); // close the loader

        this.$store.commit("updateResponse", data);
        console.log(data); // TODO remove
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sentiment-input {
  width: 80%;
  max-width: 700px;
  font-size: 18pt;
}
</style>
