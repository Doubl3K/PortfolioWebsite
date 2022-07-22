window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 900) {
    document.getElementById("header").style.top = "-20px";
  } else{
    document.getElementById("header").style.top = "0px";
  }
  console.log('test');
}

console.error("Wenn sie schon einmal hier sind können sie auch gerne eine E-Mail an jobs@kevinkinner.de senden.");
