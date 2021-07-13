var url = require("is-url");
console.log("start");

const delay = (ms) => new Promise((res) => setTimeout(() => res(ms), ms));
(async () => {
  for (let i = 0; i < 100; i++) {
    await delay(1000);
    console.log("emulation logs ", i);
  }
})();

console.log("http://google.com, isURL? ", url("http://google.com"));
