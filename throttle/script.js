const callAPI = () => {
  console.log("API Throttles running every 5 sec");
};

let count = 0;
function throttler(func, pause) {
  let endTime = 0;
  return function () {
    console.log(count++);
    if (Date.now() - endTime > pause) {
      endTime = Date.now();
      func.apply(this, arguments);
    }
  };
}

window.addEventListener("load", function () {
  var btn = document.getElementById("click");
  btn.addEventListener("click", throttler(callAPI, 5000));
});
