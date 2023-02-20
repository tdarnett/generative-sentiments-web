<script>
import VueP5 from 'vue-p5';

class Blobbo {
  constructor() {
    this.nbPoints = 500;
    this.time = 0;
  }

  wave(num, amp, freq, speed) {
    return (
      amp *
      Math.sin((freq * 2 * Math.PI * num) / this.nbPoints + this.time * speed)
    );
  }
  draw(sk) {
    sk.noStroke();
    sk.fill('#36AF87');

    sk.beginShape();

    for (let i = 0; i < this.nbPoints; i++) {
      const angle = (2 * Math.PI * i) / this.nbPoints;
      const r =
        350 +
        this.wave(i, sk.mouseX * 0.01, 3, 2) +
        this.wave(i, sk.mouseY * 0.01, 7, 3) +
        this.wave(i, 5, 9, 0) +
        this.wave(i, 2, 13, -5);

      const x = sk.windowWidth / 2 + r * Math.cos(angle);
      const y = sk.windowHeight / 2 + r * Math.sin(angle);

      sk.vertex(x, y);
    }

    sk.endShape();

    this.time += 0.01;
  }
}

let blob;

export default {
  name: 'Blob',
  components: {
    'vue-p5': VueP5,
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
      blob = new Blobbo();
    },
    draw(sk) {
      sk.background('#fff');
      blob.draw(sk);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blobber {
  position: absolute;
  top: -1px;
  display: inline-block;
  vertical-align: baseline;
}
</style>

<template>
  <div class="blobber">
    <vue-p5 v-on="{ setup, draw }"></vue-p5>
  </div>
</template>
