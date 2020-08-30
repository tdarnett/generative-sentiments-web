import { LABEL_ARTWORK_WRITER_MAP } from './constants.js';
export default {
  setup(sk) {
    let bg = LABEL_ARTWORK_WRITER_MAP['anger'].background;
    sk.background(bg.r, bg.g, bg.b);
    return sk;
  },
  draw(sk, _response) {
    let diameter = sk.width / 4;

    sk.translate(diameter, sk.height / 2 - diameter); // centers the circle

    sk.stroke(0, 0, 0, 15);
    randomChord(sk, diameter);
    randomChord(sk, diameter);
    return sk;
  },
  mousepressed(sk) {
    return sk;
  },
};

function randomChord(sk, diameter) {
  // from https://p5js.org/examples/math-random-chords.html
  // find a random point on a circle
  let angle1 = sk.random(0, 2 * sk.PI);
  let xpos1 = diameter + diameter * sk.cos(angle1);
  let ypos1 = diameter + diameter * sk.sin(angle1);

  // find another random point on the circle
  let angle2 = sk.random(0, 2 * sk.PI);
  let xpos2 = diameter + diameter * sk.cos(angle2);
  let ypos2 = diameter + diameter * sk.sin(angle2);

  // draw a line between them
  sk.line(xpos1, ypos1, xpos2, ypos2);
}
