export default {
  setup(sk, _height, _width) {
    sk.background(236, 104, 215);
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
