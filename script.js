// Themechanger
let darkmodeActive = true;
let themeButton = document.getElementById("themechanger");
let themeButtonCircle = document.getElementById("themechangercircle");
let body = document.getElementsByTagName("body");

themeButton.addEventListener("click", () => {
    
    if (darkmodeActive == true) {
        body[0].style.background = "hsl(150, 14%, 84%)";
        body[0].style.color = "black";
        themeButton.style.background = "url(../Pictures/buttons/sunset.svg) no-repeat 90% 45%";
        themeButton.style.backgroundColor = "black";
        themeButton.style.color = "white";
        themeButton.textContent = "Dark Mode";
        waveAnimation(darkmodeActive);
        darkmodeActive = false;
    }
    
    else if (darkmodeActive == false) {
        body[0].style.background = "black"
        body[0].style.color = "white";
        themeButton.style.background = "url(../Pictures/buttons/sunrise.svg) no-repeat 90% 45%";
        themeButton.style.backgroundColor = "white";
        themeButton.style.color = "black";
        themeButton.textContent = "Light Mode"
        waveAnimation(darkmodeActive);
        darkmodeActive = true;
    }
});

function waveAnimation(darkmodeActive) {
    let waveForm = document.createElement("div");
    waveForm.style.width = "99vw";
    waveForm.style.height = "300vh";
    waveForm.style.borderRadius = "150px"
    waveForm.style.zIndex = "-1";
    waveForm.style.background = "black";
    waveForm.style.position = "absolute";
    waveForm.style.top = "0px";
    waveForm.style.boxSizing = "border-box";
    waveForm.style.overflow = "hidden";
    if (darkmodeActive == true) {
        waveForm.style.background = "black";
    }
    else if(darkmodeActive == false){
        waveForm.style.background = "hsl(150, 14%, 84%)";
    }

    body[0].appendChild(waveForm);
    let id = null;
    let animationTopToBottom = ((id) =>{
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 15);
        function frame (){
            if (pos == 300 ) {
                clearInterval(id);
            }
            else{
                pos++;
                waveForm.style.top = pos + "vh";
                let height = 300 - pos;
                waveForm.style.height = height + "vw";
                console.log(height);

            }
        }
    })();
}

//Periodic Headline Changer
let abttxtc = document.getElementsByClassName("abouttext");
let abttxt = abttxtc[0];
let abttxtheader = abttxt.childNodes[1];
let interval = setInterval(headerChanger, 12000);
let tup = 0;
function headerChanger(){
        switch (tup) {
            case 0:
                abttxtheader.textContent = "Computer Guy"
                break;
            case 1:
                abttxtheader.textContent = "Programmer"
                break;
            case 2:
                abttxtheader.textContent = "Webdeveloper Frontend"
                tup = -1;
            break;
        
            default:
                tup = -1;
                break;
            }
    tup++;
}