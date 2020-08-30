// Adapted from https://github.com/generative-design/Code-Package-p5.js/blob/master/01_P/P_2_2_3_01/sketch.js
import { LABEL_ARTWORK_WRITER_MAP } from './constants.js';

let formResolution = 15;
let stepSize = 2;
let initRadius = 125;
let centerX;
let centerY;
let x = [];
let y = [];

export default {
  setup(sk) {
    centerX = sk.width / 2;
    centerY = sk.height / 2;
    let angle = sk.radians(360 / formResolution);
    for (let i = 0; i < formResolution; i++) {
      x.push(sk.cos(angle * i) * initRadius);
      y.push(sk.sin(angle * i) * initRadius);
    }

    sk.stroke(0, 50);
    sk.strokeWeight(0.75);

    let bg = LABEL_ARTWORK_WRITER_MAP['sadness'].background;
    sk.background(bg);

    return sk;
  },
  draw(sk, _response) {
    // floating towards mouse position
    centerX += (sk.mouseX - centerX) * 0.01;
    centerY += (sk.mouseY - centerY) * 0.01;

    // calculate new points
    for (var i = 0; i < formResolution; i++) {
      x[i] += sk.random(-stepSize, stepSize);
      y[i] += sk.random(-stepSize, stepSize);
    }

    sk.noFill();

    sk.beginShape();
    // first controlpoint
    sk.curveVertex(
      x[formResolution - 1] + centerX,
      y[formResolution - 1] + centerY
    );

    // only these points are drawn
    for (let i = 0; i < formResolution; i++) {
      sk.curveVertex(x[i] + centerX, y[i] + centerY);
    }
    sk.curveVertex(x[0] + centerX, y[0] + centerY);

    // end controlpoint
    sk.curveVertex(x[1] + centerX, y[1] + centerY);
    sk.endShape();

    return sk;
  },
  mousepressed(sk) {
    centerX = sk.mouseX;
    centerY = sk.mouseY;
    let angle = sk.radians(360 / formResolution);
    for (let i = 0; i < formResolution; i++) {
      x[i] = sk.cos(angle * i) * initRadius;
      y[i] = sk.sin(angle * i) * initRadius;
    }
    return sk;
  },
};
