<template>
  <div id="app" :style="backgroundColour">
    <div class="wrapper">
      <Blob v-if="!this.$store.getters.label" />
      <SentimentInput msg="How are you feeling?" />
      <GenerativeCanvas v-if="this.$store.getters.label" />
    </div>
  </div>
</template>

<script>
import SentimentInput from './components/SentimentInput.vue';
import GenerativeCanvas from './components/GenerativeCanvas.vue';
import Blob from './components/Blob.vue';

export default {
  name: 'app',
  components: {
    SentimentInput,
    GenerativeCanvas,
    Blob,
  },
  computed: {
    backgroundColour: function() {
      // add a touch of transparency to distinguish the background from canvas
      const transparency = '0.90';
      const rgbValues = this.$store.getters.backgroundRGB;
      const rgbArray = rgbValues.replace(/[^\d,]/g, '').split(',');
      return { backgroundColor: `rgba(${rgbArray.join(',')},${transparency})` };
    },
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
}
</style>
