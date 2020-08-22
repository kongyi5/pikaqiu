import string from "./css.js";

let n = 1;
demo2.innerHTML = string.substr(0, n);
demo.innerText = string.substr(0, n);

let time = 100;

const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  demo2.innerHTML = string.substr(0, n);
  demo.innerText = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

let id = setInterval(() => {
  run();
}, time);

btnPause.onclick = () => {
  window.clearInterval(id);
};

btnPlay.onclick = () => {
  id = setInterval(() => {
    run();
  }, time);
};
btnSlow.onclick = () => {
  window.clearInterval(id);
  time = 200;
  id = setInterval(() => {
    run();
  }, time);
};
btnNormal.onclick = () => {
  window.clearInterval(id);
  time = 100;
  id = setInterval(() => {
    run();
  }, time);
};
btnFast.onclick = () => {
  window.clearInterval(id);
  time = 10;
  id = setInterval(() => {
    run();
  }, time);
};
