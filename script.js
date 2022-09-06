let darkmodeActive = true;
let themeButton = document.getElementById("themechanger");
themeButton.addEventListener("click", () => {
    let body = document.getElementsByTagName("body");
    
    if (darkmodeActive == true) {
        body[0].style.background = "hsl(150, 14%, 84%)";
        body[0].style.color = "black";
        themeButton.style.background = "black";
        themeButton.style.color = "white";
        darkmodeActive = false;
    }
    
    else if (darkmodeActive == false) {
        body[0].style.background = "black"
        body[0].style.color = "white";
        themeButton.style.background = "white";
        themeButton.style.color = "black";
        darkmodeActive = true;
    }
});

