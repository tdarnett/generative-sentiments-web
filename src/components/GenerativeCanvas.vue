<template>
  <vue-p5 v-on="{ setup, draw }"></vue-p5>
</template>

<script>
import VueP5 from 'vue-p5';

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
  props: {
    confidence: String,
    label: String,
    sentence: String,
  },
  methods: {
    setup(sketch) {
      sketch.resizeCanvas(this.width, this.height);
      sketch.background('white');
    },
    draw(sketch) {
      sketch.translate(sketch.width / 2, sketch.height / 2);
      sketch.stroke('#0f0f0f');
      sketch.strokeWeight(1.5);
      //loop for adding 100 lines
      let t = this.t;
      console.log(t);
      for (let i = 0; i < 100; i++) {
        sketch.line(x1(t + i), y1(t + i), x2(t + i) + 20, y2(t + i) + 20);
      }
      // this.t += 0.15;

      // function to change initial x co-ordinate of the line
      function x1(t) {
        return (
          sketch.sin(t / 10) * 125 +
          sketch.sin(t / 20) * 125 +
          sketch.sin(t / 30) * 125
        );
      }

      // function to change initial y co-ordinate of the line
      function y1(t) {
        return (
          sketch.cos(t / 10) * 125 +
          sketch.cos(t / 20) * 125 +
          sketch.cos(t / 30) * 125
        );
      }

      // function to change final x co-ordinate of the line
      function x2(t) {
        return (
          sketch.sin(t / 15) * 125 +
          sketch.sin(t / 25) * 125 +
          sketch.sin(t / 35) * 125
        );
      }

      // function to change final y co-ordinate of the line
      function y2(t) {
        return (
          sketch.cos(t / 15) * 125 +
          sketch.cos(t / 25) * 125 +
          sketch.cos(t / 35) * 125
        );
      }
    },
  },
};
</script>
