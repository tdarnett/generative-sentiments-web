// Adapted from https://p5js.org/examples/interaction-wavemaker.html

let timestep = 0;

export default {
  setup(sk) {
    sk.noStroke();
    sk.fill(53, 164, 80);
    return sk;
  },
  draw(sk, _response) {
    sk.background(10, 10);

    // make a x and y grid of ellipses
    for (let x = 0; x <= sk.width; x = x + 30) {
      for (let y = 0; y <= sk.height; y = y + 30) {
        // starting point of each circle depends on mouse position
        const xAngle = sk.map(
          sk.mouseX,
          0,
          sk.width,
          -4 * sk.PI,
          4 * sk.PI,
          true
        );
        const yAngle = sk.map(
          sk.mouseY,
          0,
          sk.height,
          -4 * sk.PI,
          4 * sk.PI,
          true
        );

        // and also varies based on the particle's location
        const angle = xAngle * (x / sk.width) + yAngle * (y / sk.height);

        // each particle moves in a circle
        const myX = x + 20 * sk.cos(2 * sk.PI * timestep + angle);
        const myY = y + 20 * sk.sin(2 * sk.PI * timestep + angle);

        sk.ellipse(myX, myY, 10); // draw particle
      }
      timestep += 0.0002;
    }
    return sk;
  },
  mousepressed(sk) {
    return sk;
  },
};
