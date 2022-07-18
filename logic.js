window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    document.getElementById("header").style.top = "-20px";
    document.getElementById("nav-wrapper").style.height = "8vh";
  } else {
    document.getElementById("header").style.top = "0px";
    document.getElementById("nav-wrapper").style.height = "10vh";
  }
}

console.error("Wenn sie schon einmal hier sind können sie auch gerne eine E-Mail an jobs@kevinkinner.de senden.");
