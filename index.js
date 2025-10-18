function generateQoute(event) {

event.preventDefault();

new Typewriter('#quotes', {
  strings: '"Beauty is in the eye of the beholder, \n\n No one is ugly"',
  autoStart: true,
  cursor: null,
  delay: 1,
});
}

let form = document.querySelector("#quote-generator");
form.addEventListener("submit", generateQoute);
