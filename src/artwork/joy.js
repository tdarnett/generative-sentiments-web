// Adapted from https://github.com/generative-design/Code-Package-p5.js/blob/master/01_P/P_2_3_3_01/sketch.js
import { LABEL_ARTWORK_WRITER_MAP } from './constants.js';
let x;
let y;
let stepSize = 5.0;

const font = 'Georgia';
const fontSizeMin = 3;
const angleDistortion = 0.01;

let counter = 0;

export default {
  setup(sk) {
    let bg = LABEL_ARTWORK_WRITER_MAP['joy'].background;
    sk.background(bg.r, bg.g, bg.b);
    sk.cursor(sk.CROSS);

    x = sk.mouseX;
    y = sk.mouseY;

    sk.textFont(font);
    sk.textAlign(sk.LEFT);
    sk.fill(0);

    return sk;
  },
  draw(sk, response) {
    if (sk.mouseIsPressed && sk.mouseButton == sk.LEFT) {
      let letters = response.input_sentence;

      let d = sk.dist(x, y, sk.mouseX, sk.mouseY);
      sk.textSize(fontSizeMin + d / 2);

      let newLetter = letters.charAt(counter);
      stepSize = sk.textWidth(newLetter);

      if (d > stepSize) {
        let angle = sk.atan2(sk.mouseY - y, sk.mouseX - x);

        sk.push();
        sk.translate(x, y);
        sk.rotate(angle + sk.random(angleDistortion));
        sk.text(newLetter, 0, 0);
        sk.pop();

        counter++;
        if (counter >= letters.length) counter = 0;

        x = x + sk.cos(angle) * stepSize;
        y = y + sk.sin(angle) * stepSize;
      }
    }
    return sk;
  },
  mousepressed(sk) {
    x = sk.mouseX;
    y = sk.mouseY;
  },
};
