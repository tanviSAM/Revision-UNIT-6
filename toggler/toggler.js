function toggle() {
  var arr = arguments;
  var N = arr.length;
  var s = -1;
  return function () {
    s += 1;
    if (s >= N) {
      s = 0;
    }
    return arr[s];
  };
}

const toggler = toggle(1, 2, 3);

console.log(toggler());
console.log(toggler());
console.log(toggler());
console.log(toggler());
console.log(toggler());
console.log(toggler());
console.log(toggler());
