const callback = () => {
  console.log("API debounce in Progress");
};

function debouncing(func, delay) {
  var debounce;
  return function () {
    debounce && clearTimeout(debounce);
    debounce = setTimeout(func.apply(this, arguments), delay);
  };
}

window.addEventListener("load", function () {
  var btn = document.getElementById("click");
  btn.addEventListener("click", debouncing(callback, 1000));
});
