function displayQuotes(response) {

  new Typewriter('#quotes', {
  strings: `${response.data.answer}`,
  autoStart: true,
  cursor: null,
  delay: 1,
});
}



function generateQoute(event) {

event.preventDefault();

let userInput = document.querySelector("#search-input");
let prompt = `User Instruction: Generate a two line motivational quote about ${userInput.value}`
let context = `You are an expert motivational speaker, that gives wholesome and very short and concise motivations. Write each line in basic HTML, using this format: <p></p> and should be inside quotation marks. Have a "SheCodes AI" signature at the end of the poem using this format: <strong></strong>`
let apiKey = "e2b85d39ocbf2atcfebaabf3b2422057";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayQuotes);

}

let form = document.querySelector("#quote-generator");
form.addEventListener("submit", generateQoute);
