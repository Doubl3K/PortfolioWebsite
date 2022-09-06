let themeButton = document.getElementById("themechanger");
themeButton.addEventListener("click", () => {
    let body = document.getElementsByTagName("body");
    body[0].style.background = "hsl(150, 14%, 84%)";
    body[0].style.color = "black";
});

