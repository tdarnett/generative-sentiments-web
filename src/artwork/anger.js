export default {
  generate(sketch, t) {
    sketch.translate(sketch.width / 2, sketch.height / 2);
    sketch.stroke('#0f0f0f');
    sketch.strokeWeight(1.5);
    //loop for adding 100 lines
    for (let i = 0; i < 100; i++) {
      sketch.line(
        x1(t + i, sketch),
        y1(t + i, sketch),
        x2(t + i, sketch) + 20,
        y2(t + i, sketch) + 20
      );
    }
    return sketch;
  },
};

// function to change initial x co-ordinate of the line
function x1(t, sketch) {
  return (
    sketch.sin(t / 10) * 125 +
    sketch.sin(t / 20) * 125 +
    sketch.sin(t / 30) * 125
  );
}

// function to change initial y co-ordinate of the line
function y1(t, sketch) {
  return (
    sketch.cos(t / 10) * 125 +
    sketch.cos(t / 20) * 125 +
    sketch.cos(t / 30) * 125
  );
}

// function to change final x co-ordinate of the line
function x2(t, sketch) {
  return (
    sketch.sin(t / 15) * 125 +
    sketch.sin(t / 25) * 125 +
    sketch.sin(t / 35) * 125
  );
}

// function to change final y co-ordinate of the line
function y2(t, sketch) {
  return (
    sketch.cos(t / 15) * 125 +
    sketch.cos(t / 25) * 125 +
    sketch.cos(t / 35) * 125
  );
}
