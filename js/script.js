// let let1 = prompt(`Enter a letter`);

let button = document.getElementById("button");
let ans = document.getElementById("ans");
let letter = document.getElementById("letter");
// let answer = answers[letter];
// let word = answer.word;
// let cls = answer.cls;

// console.log(letter);
// console.log(answer);
// console.log(word);
// console.log(cls);
// console.log(`${letter} = ${word}`);
// console.log(cls);

button.addEventListener("click", function () {
  if (letter.value.length !== 1) {
    alert("Enter a letter!");
  } else {

const answers = {
  a: { word: "apple", cls: "fa-regular fa-apple-whole" },
  b: { word: "balloon", cls: "fa-regular fa-balloon" },
  c: { word: "cat", cls: "fa-regular fa-cat" },
  d: { word: "dog", cls: "fa-regular fa-dog" },
  e: { word: "elephant", cls: "fa-regular fa-elephant" },
  f: { word: "fish", cls: "fa-regular fa-fish" },
  g: { word: "guitar", cls: "fa-regular fa-guitar" },
  h: { word: "house", cls: "fa-regular fa-house" },
  i: { word: "ice cream", cls: "fa-regular fa-ice-cream" },
  j: { word: "jet", cls: "fa-regular fa-jet-fighter" },
  k: { word: "key", cls: "fa-regular fa-key" },
  l: { word: "light bulb", cls: "fa-regular fa-lightbulb-on" },
  m: { word: "monkey", cls: "fa-regular fa-monkey" },
  n: { word: "narwhal", cls: "fa-regular fa-narwhal" },
  o: { word: "octopus", cls: "fa-brands fa-octopus-deploy" },
  p: { word: "pig", cls: "fa-regular fa-pig" },
  q: { word: "question mark", cls: "fa-regular fa-circle-question" },
  r: { word: "rocket", cls: "fa-regular fa-rocket-launch" },
  s: { word: "sun", cls: "fa-regular fa-sun-bright" },
  t: { word: "turtle", cls: "fa-regular fa-turtle" },
  u: { word: "umbrella", cls: "fa-regular fa-umbrella" },
  v: { word: "volcano", cls: "fa-regular fa-volcano" },
  w: { word: "whale", cls: "fa-regular fa-whale" },
  x: { word: "the letter X", cls: "fa-regular fa-circle-x" },
  y: { word: "yin-yang", cls: "fa-regular fa-yin-yang" },
  z: { word: "zipper", cls: "fa-regular fa-file-zipper" }
};

let answer = answers[letter];
let word = answer.word;
let cls = answer.cls;
ans.innerHTML = word;

}});