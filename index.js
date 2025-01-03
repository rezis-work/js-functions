function display(data) {
  console.log(data);
}
function printHello() {
  console.log("hello");
}
function blockFor3000ms() {
  // here will be while long loop
}

setTimeout(printHello, 0);

const futureData = fetch("https://linedevltd.com/courses/javascript");
futureData.then(display);

blockFor3000ms();

console.log("Me first");
