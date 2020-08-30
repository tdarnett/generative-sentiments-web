// adapted from https://editor.p5js.org/mtchl/sketches/S1Lfx04il
import { LABEL_ARTWORK_WRITER_MAP } from './constants.js';

let points = [];
const gravity = 0;
const bounce = -1;
const surpriseCoefficient = 1.05;

export default {
  setup(sk) {
    let bg = LABEL_ARTWORK_WRITER_MAP['surprise'].background;
    sk.background(bg.r, bg.g, bg.b);
    return sk;
  },
  draw(sk, response) {
    // acceleration is based off the prediction confidence
    let acceleration = response.confidence * surpriseCoefficient;

    for (let i = 0; i < points.length; i++) {
      let p = points[i];

      if (p.y > sk.height || p.y < 0) {
        p.ydrift = p.ydrift * bounce;
      }

      if (p.x > sk.width || p.x < 0) {
        p.xdrift = p.xdrift * bounce;
      }

      let diam = 8 + 40 / p.age;

      // generate random color for each point
      let color = sk.color(
        sk.random(0, 256),
        sk.random(0, 256),
        sk.random(0, 256)
      );
      sk.fill(color);
      sk.ellipse(p.x, p.y, diam, diam);

      p.x += p.xdrift;
      p.y += p.ydrift;

      p.xdrift = p.xdrift * acceleration; // accelerate your drift
      p.ydrift = p.ydrift * acceleration; // accelerate your drift

      p.ydrift = p.ydrift + gravity;

      p.age = p.age + 1; // increase 'age' counter
    }
    points = points.filter((p) => p.age <= 100);
    return sk;
  },

  mousepressed(sk) {
    explode(sk, sk.mouseX, sk.mouseY);
    return sk;
  },
};

function explode(sketch, xpos, ypos) {
  for (let i = 0; i < 20; i++) {
    let newPoint = {
      x: xpos + sketch.random(-2, 2),
      y: ypos + sketch.random(-2, 2),
      xdrift: sketch.random(-10, 10),
      ydrift: sketch.random(-10, 10),
      age: 1,
    };
    points.push(newPoint);
  }
}
