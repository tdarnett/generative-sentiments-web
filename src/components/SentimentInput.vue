<template>
  <el-form ref="form" :model="form" @submit.native.prevent="handleSubmit">
    <el-form-item>
      <el-input
        class="sentiment-input"
        :placeholder="msg"
        v-model="form.sentiment"
        type="text"
        :show-word-limit="true"
        maxlength="50"
      />
    </el-form-item>
  </el-form>
</template>

<script>
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
    handleSubmit() {
      console.log('submit!');
      // TODO send API request to predictor
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
