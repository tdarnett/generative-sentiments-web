export default {
  setup(sk, _height, _width) {
    sk.background(227, 49, 85);
    return sk;
  },
  draw(sketch, _timestep, _response) {
    sketch.translate(sketch.width / 4, sketch.height / 6);
    sketch.stroke(0, 0, 0, 15);
    randomChord(sketch);
    randomChord(sketch);
    return sketch;
  },
  mousepressed(sk) {
    return sk;
  },
};

function randomChord(sketch) {
  // from https://p5js.org/examples/math-random-chords.html

  // find a random point on a circle
  let angle1 = sketch.random(0, 2 * sketch.PI);
  let xpos1 = 200 + 200 * sketch.cos(angle1);
  let ypos1 = 200 + 200 * sketch.sin(angle1);

  // find another random point on the circle
  let angle2 = sketch.random(0, 2 * sketch.PI);
  let xpos2 = 200 + 200 * sketch.cos(angle2);
  let ypos2 = 200 + 200 * sketch.sin(angle2);

  // draw a line between them
  sketch.line(xpos1, ypos1, xpos2, ypos2);
}
