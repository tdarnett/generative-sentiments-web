<script>
import VueP5 from "vue-p5";
import { LABEL_ARTWORK_WRITER_MAP } from "../artwork/constants.js";
import utils from "../utils";

export default {
  name: "GenerativeCanvas",
  components: {
    "vue-p5": VueP5,
  },
  // make sure every method created here exists in each emotion object in LABEL_ARTWORK_WRITER_MAP
  methods: {
    setup(sketch) {
      // defaults for all artwork
      sketch.createCanvas(sketch.windowWidth * 0.7, sketch.windowHeight * 0.8);
      sketch.background("white");

      // emotion specific setup
      if (this.$store.getters.label) {
        let labelArtwork = LABEL_ARTWORK_WRITER_MAP[this.$store.getters.label];
        sketch = labelArtwork.object.setup(sketch, this.width, this.height);
      }
    },
    draw(sketch) {
      if (this.$store.getters.label) {
        let labelArtwork = LABEL_ARTWORK_WRITER_MAP[this.$store.getters.label];
        labelArtwork.object.draw(sketch, this.$store.state.response);
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
        // must match the default background colours for each emotion
        let bg = LABEL_ARTWORK_WRITER_MAP[this.$store.getters.label].background;
        sketch.background(bg.r, bg.g, bg.b);
      }
    },
    mousepressed(sketch) {
      if (this.$store.getters.label) {
        let labelArtwork = LABEL_ARTWORK_WRITER_MAP[this.$store.getters.label];
        labelArtwork.object.mousepressed(sketch);
      }
    },
  },
};
</script>

<template>
  <vue-p5 v-on="{ setup, mousepressed, keypressed, draw}"></vue-p5>
</template>
