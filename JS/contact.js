const textarea = document.getElementById("write-to-us"); 
const counter = document.querySelector(".counter");

const characterLimit = 500;

textarea.addEventListener("input", function () {
  const currentNumber = textarea.value.length;
  counter.textContent = `(${currentNumber} / ${characterLimit})`;

  if (currentNumber >= characterLimit) {
    textarea.classList.add("over-limit");
    counter.classList.add("over-limit");
    } else {
    textarea.classList.remove("over-limit");
    counter.classList.remove("over-limit");
  }
});
