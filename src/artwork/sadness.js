export default {
  generate(sketch, _) {
    sketch.translate(sketch.width / 4, 5);
    sketch.stroke(0, 0, 0, 15);
    randomChord(sketch);
    randomChord(sketch);
    return sketch;
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
