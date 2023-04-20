function animateButton() {
  var button = document.getElementById("anim-button");
  button.classList.add("animate");

  setTimeout(function () {
    button.classList.remove("animate");
  }, 300);
}

var gif = document.getElementById("blinking-gif");
var isBlinking = false;

function toggleBlinking() {
  if (isBlinking) {
    clearInterval(blinkingInterval);
    gif.style.opacity = "1";
    isBlinking = false;
  } else {
    var blinkingInterval = setInterval(function () {
      gif.style.opacity = gif.style.opacity === "1" ? "0" : "1";
    }, 50);
    isBlinking = true;
  }
}
