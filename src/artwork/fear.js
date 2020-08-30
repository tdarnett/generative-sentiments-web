export default {
  setup(sk, _height, _width) {
    sk.background(53, 164, 80);
    return sk;
  },
  draw(sketch, _) {
    sketch.line(50, 60, 60, 70);
    return sketch;
  },
};
