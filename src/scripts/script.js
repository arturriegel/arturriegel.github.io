// Function to change language in the website
function changeLang() {
  let langBtn = document.getElementById("langBtn");
  let currentSrc = langBtn.src;
  let newSrc;
  // Check the src of the image and change it depending on the website language
  if (currentSrc.endsWith("united-states.png")) {
    newSrc = currentSrc.replace("united-states.png", "brazil-.png");
  } else {
    newSrc = currentSrc.replace("brazil-.png", "united-states.png");
  }
}
