let darkmodeActive = true;
let themeButton = document.getElementById("themechanger");
let themeButtonCircle = document.getElementById("themechangercircle");
themeButton.addEventListener("click", () => {
    let body = document.getElementsByTagName("body");
    
    if (darkmodeActive == true) {
        body[0].style.background = "hsl(150, 14%, 84%)";
        body[0].style.color = "black";
        themeButton.style.background = "url(../Pictures/buttons/sunset.svg) no-repeat 90% 45%";
        themeButton.style.backgroundColor = "black";
        themeButton.style.color = "white";
        themeButton.textContent = "Dark Mode";
        darkmodeActive = false;
    }
    
    else if (darkmodeActive == false) {
        body[0].style.background = "black"
        body[0].style.color = "white";
        themeButton.style.background = "url(../Pictures/buttons/sunrise.svg) no-repeat 90% 45%";
        themeButton.style.backgroundColor = "white";
        themeButton.style.color = "black";
        themeButton.textContent = "Light Mode"
        darkmodeActive = true;
    }
});

