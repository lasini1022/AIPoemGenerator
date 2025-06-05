function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "poem is added here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
