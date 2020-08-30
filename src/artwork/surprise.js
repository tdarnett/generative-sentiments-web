export default {
  setup(sk, _height, _width) {
    sk.background(63, 165, 192);
    return sk;
  },
  draw(sketch, _) {
    sketch.line(50, 60, 60, 70);
    return sketch;
  },
};
