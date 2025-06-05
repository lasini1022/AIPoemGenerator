function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "14b3e71od6df40977d863a00tdaeb6ef";
  let prompt = `User instructions: Generate a english poem about ${instructionsInput.value}`;
  let context =
    "You area romantin poem expert and loce to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br /> of the 4 line poem. Make sure to follow the user instructions. Also, sign at the bottom of the poem with SheCodes AI in HTML strong elements around it.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛</div>Generating an English poem about ${instructionsInput.value}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
