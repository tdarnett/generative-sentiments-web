<script>
import VueP5 from "vue-p5";
import { LABEL_ARTWORK_WRITER_MAP } from "../artwork/constants.js";
import utils from "../utils";

export default {
  name: "GenerativeCanvas",
  components: {
    "vue-p5": VueP5,
  },
  data() {
    return {
      width: 800,
      height: 600,
      timestep: 0,
    };
  },
  // make sure every method created here exists in each emotion object in LABEL_ARTWORK_WRITER_MAP
  methods: {
    setup(sketch) {
      // defaults for all artwork
      sketch.resizeCanvas(this.width, this.height);
      sketch.background("white");

      // emotion specific setup
      if (this.$store.getters.label) {
        let labelArtwork = LABEL_ARTWORK_WRITER_MAP[this.$store.getters.label];
        sketch = labelArtwork.setup(sketch, this.width, this.height);
      }
    },
    draw(sketch) {
      if (this.$store.getters.label) {
        let labelArtwork = LABEL_ARTWORK_WRITER_MAP[this.$store.getters.label];
        labelArtwork.draw(sketch, this.timestep, this.$store.state.response);
        // this.timestep += 0.15;
      }
    },
    keypressed(sketch) {
      const keyCode = sketch.keyCode;
      const key = String.fromCharCode(keyCode);

      // save image
      if (key == "s" || key == "S") {
        sketch.saveCanvas(utils.timestamp(), "png"); // TODO put tooltip legend explaining shortcuts
      }

      // clear background
      if (keyCode == sketch.DELETE || keyCode == sketch.BACKSPACE) {
        sketch.background(255); // TODO use the label background constant
      }
    },
    mousepressed(sketch) {
      if (this.$store.getters.label) {
        let labelArtwork = LABEL_ARTWORK_WRITER_MAP[this.$store.getters.label];
        labelArtwork.mousepressed(sketch);
      }
    },
  },
};
</script>

<template>
  <vue-p5 v-on="{ setup, mousepressed, keypressed, draw}"></vue-p5>
</template>
