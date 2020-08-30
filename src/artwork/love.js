import { LABEL_ARTWORK_WRITER_MAP } from './constants.js';

let symmetry = 6;
let angle = 360 / symmetry;
let brushSize = 4;

export default {
  setup(sk) {
    let bg = LABEL_ARTWORK_WRITER_MAP['love'].background;
    sk.background(bg.r, bg.g, bg.b);
    sk.angleMode(sk.DEGREES);
    return sk;
  },
  draw(sk, _response) {
    sk.translate(sk.width / 2, sk.height / 2);
    if (
      sk.mouseX > 0 &&
      sk.mouseX < sk.width &&
      sk.mouseY > 0 &&
      sk.mouseY < sk.height
    ) {
      let mx = sk.mouseX - sk.width / 2;
      let my = sk.mouseY - sk.height / 2;
      let pmx = sk.pmouseX - sk.width / 2;
      let pmy = sk.pmouseY - sk.height / 2;

      if (sk.mouseIsPressed) {
        for (let i = 0; i < symmetry; i++) {
          sk.rotate(angle);
          sk.strokeWeight(brushSize);
          sk.stroke(256); // white
          sk.line(mx, my, pmx, pmy);
          sk.push();
          sk.scale(1, -1);
          sk.line(mx, my, pmx, pmy);
          sk.pop();
        }
      }
    }
    return sk;
  },
  mousepressed(sk) {
    return sk;
  },
};
