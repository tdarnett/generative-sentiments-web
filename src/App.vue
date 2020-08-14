<template>
  <div id="app">
    <el-main>
      <SentimentInput msg="Describe how you feel in one sentence..." />
    </el-main>
  </div>
</template>

<script>
import SentimentInput from './components/SentimentInput.vue';

export default {
  name: 'app',
  components: {
    SentimentInput,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
