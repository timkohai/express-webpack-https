'use strict';

function groupBy(arr, key) {
  return arr.reduce((acc, i) => {
    (acc[i[key]] = acc[i[key]] || []).push(i);
    return acc;
  }, {});
}


const sqrt = Math.sqrt;

function square(x) {
    return x * x;
}

function diag(x, y) {
    return sqrt(square(x) + square(y));
}

export {
    groupBy,
    square,
    diag
}