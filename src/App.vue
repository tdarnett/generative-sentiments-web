<template>
  <div id="app">
    <div class="wrapper" :style="backgroundColour">
      <el-main>
        <SentimentInput msg="Describe how you feel in one sentence..." />
        <p>{{ this.$store.state.response }}</p>
        <div v-if="this.$store.getters.label">
          <GenerativeCanvas />
        </div>
      </el-main>
    </div>
  </div>
</template>

<script>
import SentimentInput from "./components/SentimentInput.vue";
import GenerativeCanvas from "./components/GenerativeCanvas.vue";

export default {
  name: "app",
  components: {
    SentimentInput,
    GenerativeCanvas,
  },
  computed: {
    backgroundColour: function () {
      return { backgroundColor: this.$store.getters.backgroundRGB };
    },
  },
};
</script>

<style>
.wrapper {
  height: 100vh;
  width: 100vw;
  background-color: #111;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #fff;
}
</style>
