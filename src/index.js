import "./styles.css";

let button = document.getElementById("hello_button");
let text = document.getElementById("text_label");
button.addEventListener("click", function () {
  console.log("Hello World!");
  text.innerHTML = "Hello World!";
});

let area = document.getElementById("text_insert");
area.addEventListener("input", function () {
  text.innerHTML = area.value;
});
