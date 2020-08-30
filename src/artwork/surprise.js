export default {
  setup(sk, _height, _width) {
    sk.background(63, 165, 192);
    return sk;
  },
  draw(sketch, _timestep, _response) {
    sketch.line(50, 60, 60, 70);
    return sketch;
  },
  mousepressed(sk) {
    return sk;
  },
};
