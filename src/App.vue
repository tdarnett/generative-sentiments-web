<template>
  <div id="app">
    <el-main>
      <SentimentInput msg="Describe how you feel in one sentence..." />
      <GenerativeCanvas />
    </el-main>
  </div>
</template>

<script>
import SentimentInput from './components/SentimentInput.vue';
import GenerativeCanvas from './components/GenerativeCanvas.vue';

export default {
  name: 'app',
  components: {
    SentimentInput,
    GenerativeCanvas,
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
