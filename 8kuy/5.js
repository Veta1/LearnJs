// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  const r1 = 3600000 * h;
  const r2 = 60000 * m;
  const r3 = 1000 * s;
  return r1 + r2 + r3;
}
