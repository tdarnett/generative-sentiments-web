<script>
import VueP5 from 'vue-p5';
import { LABEL_ARTWORK_WRITER_MAP } from '../artwork/utils.js';
import utils from '../utils';

export default {
  name: 'GenerativeCanvas',
  components: {
    'vue-p5': VueP5,
  },
  data() {
    return {
      width: 800,
      height: 600,
      t: 0,
    };
  },
  methods: {
    setup(sketch) {
      sketch.resizeCanvas(this.width, this.height);
      sketch.background('white');
    },
    draw(sketch) {
      console.log('in draw function!');
      if (this.$store.getters.label) {
        let labelArtwork = LABEL_ARTWORK_WRITER_MAP[this.$store.getters.label];
        labelArtwork.generate(sketch, this.t);
        // this.t += 0.15;
      }
    },
    keypressed(sketch) {
      const key = String.fromCharCode(sketch.keyCode);
      if (key == 's' || key == 'S') sketch.saveCanvas(utils.timestamp(), 'png');
    },
  },
};
</script>

<template>
  <vue-p5 v-on="{ setup, draw, keypressed }"></vue-p5>
</template>
