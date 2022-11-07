// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    let r1 = 3600000 * h;
    let r2 = 60000 * m;
    let r3 = 1000 * s;
    return r1 + r2 + r3
  }