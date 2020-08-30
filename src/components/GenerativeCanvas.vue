<script>
import VueP5 from 'vue-p5';
import { LABEL_ARTWORK_WRITER_MAP } from '../artwork/utils.js';

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
      if (key == 's' || key == 'S') sketch.saveCanvas(this.timestamp(), 'png');
    },
    timestamp() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      let millis = date.getMilliseconds();

      year = year.toString().substr(2);
      month = ('00' + month).substr(-2, 2);
      day = ('00' + day).substr(-2, 2);
      minute = ('00' + minute).substr(-2, 2);
      second = ('00' + second).substr(-2, 2);

      return [year, month, day, '_', hour, minute, second, '_', millis].join(
        ''
      );
    },
  },
};
</script>

<template>
  <vue-p5 v-on="{ setup, draw, keypressed }"></vue-p5>
</template>
