export default {
  setup(sk, _height, _width) {
    sk.background(250, 219, 77);
    return sk;
  },
  draw(sketch, _) {
    sketch.line(50, 60, 60, 70);
    return sketch;
  },
};
