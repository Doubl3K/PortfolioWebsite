// Themechanger
let darkmodeActive = true;
let themeButton = document.getElementById("themechanger");
let themeButtonCircle = document.getElementById("themechangercircle");
let body = document.getElementsByTagName("body");

themeButton.addEventListener("click", () => {
    
    if (darkmodeActive == true) {
        body[0].style.background = "linear-gradient(216deg, #e3e3e3, #a4a4a4)";
        body[0].style.color = "black";
        themeButton.style.background = "url(../Pictures/buttons/sunset.svg) no-repeat 90% 45%";
        themeButton.style.backgroundColor = "black";
        themeButton.style.color = "white";
        themeButton.textContent = "Dark Mode";
        waveAnimation(darkmodeActive);
        darkmodeActive = false;
    }
    
    else if (darkmodeActive == false) {
        body[0].style.background = "linear-gradient(216deg, #000000, #242424)"
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
        waveForm.style.background = "linear-gradient(216deg, #000000, #242424)";
    }
    else if(darkmodeActive == false){
        waveForm.style.background = "linear-gradient(216deg, #e3e3e3, #a4a4a4)";
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

//User settings
let menuVisible = false;
let settingsmenu = document.getElementById("menuwrapper");
let cogbutton = document.getElementById("settingscog");
cogbutton.addEventListener("click", () => {
    if (menuVisible == false) {
        settingsmenu.style.display = "flex";
        menuVisible = true;
    }
    else{
        settingsmenu.style.display = "none";
        menuVisible = false;
    }
});

const userLanguage = (() => {
    let browserLanguage = navigator.language
    let langButton = document.getElementById("languagechanger");
    let porth = document.getElementsByClassName("porthidden");
    if (browserLanguage.slice(0,2) == "en") {
        //Text Box at start of Page
        let userNotif = document.createElement("div");
        userNotif.style.background = "grey";
        userNotif.style.padding = "20px";
        userNotif.style.borderRadius = "150px";
        userNotif.style.textAlign = "center";
        userNotif.style.position = "absolute";
        userNotif.style.top = "10vh";
        userNotif.style.left  = "0";
        userNotif.style.right = "0";
        userNotif.style.width = "600px";
        userNotif.style.marginLeft = "auto";
        userNotif.style.marginRight = "auto";
        userNotif.style.fontSize = "1.3rem";
        userNotif.textContent = "Language set to english due to browser preferences. You can change this to German in the top right settings."
        body[0].appendChild(userNotif);
        //Site wide text change
        document.getElementById("p1").textContent = "Welcome on my Portfolio Page.";
        document.getElementById("p2").textContent = "Here you can find a collection of a couple of Projects I have worked on.";
        document.getElementById("p3").textContent = "You already got experience working with a CLI? Try out my web based version to get some more information about me.";
        document.getElementById("p4").textContent = "Interested in collaborating? Maybe you would like additional information about me? Don't hesitate to contact me, either at jobs@kevinkinner.de or via the form below";
        porth[0].textContent = "Browserbased Calculator";
        porth[1].textContent = "Rock Paper Scissor";
        porth[2].textContent = "Singupform for public speakers";
        porth[3].textContent = "Sign in mockup for a Forum";
        porth[4].textContent = "Local Library";
        porth[5].textContent = "Etch-a-Sketch";
        langButton.textContent = "German";
        setTimeout(() => {
            userNotif.style.display = "none";
        }, 10000);
    }
    else{
        langButton.textContent = "English";
    }
    langButton.addEventListener("click", () =>{
        if (browserLanguage.slice(0,2) == "de"){
            langButton.textContent = "German";
            browserLanguage = "en";
            document.getElementById("p1").textContent = "Welcome on my Portfolio Page.";
            document.getElementById("p2").textContent = "Here you can find a collection of a couple of Projects I have worked on.";
            document.getElementById("p3").textContent = "You already got experience working with a CLI? Try out my web based version to get some more information about me.";
            document.getElementById("p4").textContent = "Interested in collaborating? Maybe you would like additional information about me? Don't hesitate to contact me,either at jobs@kevinkinner.de or via the form below";
            porth[0].textContent = "Browserbased Calculator";
            porth[1].textContent = "Rock Paper Scissor";
            porth[2].textContent = "Singupform for public speakers";
            porth[3].textContent = "Sign in mockup for a Forum";
            porth[4].textContent = "Local Library";
            porth[5].textContent = "Etch-a-Sketch";




        }else{
            langButton.textContent = "English";
            browserLanguage = "de";
            document.getElementById("p1").textContent = "Willkommen auf meiner persönlichen Website.";
            document.getElementById("p2").textContent = "Hier können Sie eine kleine Sammlung an Projekten finden an denen ich bereits gearbeitet habe.";
            document.getElementById("p3").textContent = "Sie haben bereits Erfahrung im Umgang mit einer CLI? Nutzen sie doch meine webbassierte Version um mehr Information über mich zu erhalten.";
            document.getElementById("p4").textContent = "Falls sie an einer Zusammearbeit interessiert sind oder gerne weitere Informationen zu meiner Person hätten kontaktieren sie mich. Senden sie entweder eine E-Mail an jobs@kevinkinner.de oder nutzen sie das Kontaktformular unten.";
            porth[0].textContent = "Ein simpler browserbasierter Tashenrechner.";
            porth[1].textContent = "Schere Stein Papier";
            porth[2].textContent = "Meldeformular für Messeredner";
            porth[3].textContent = "Anmeldeformular für ein Onlineforum";
            porth[4].textContent = "Lokale Bibliothek für gelesene Bücher";
            porth[5].textContent = "Etch-a-Sketch";
        }
    });
})();

document.getElementById("submitbutton").addEventListener("click", () =>{
    let name = document.getElementsByName("name")[0].value;
    let mail = document.getElementsByName("email")[0].value;
    let comp = document.getElementsByName("company")[0].value;
    let umsg = document.getElementsByName("message")[0].textContent;

    let answer = document.createElement("div");
    answer.style.position = "fixed";
    answer.style.width = "30vw";
    answer.style.left = "0";
    answer.style.right = "0";
    answer.style.marginLeft = "auto";
    answer.style.marginRight = "auto";
    answer.style.padding = "10px";
    answer.style.top = "50vh";
    answer.style.borderRadius = "15px";
    answer.style.boxShadow = "3px 5px #4EC5F1"
    answer.style.background = "#eee";
    answer.style.color = "black";
    answer.style.fontSize = "2rem";

    console.table({name,mail,comp,umsg});
    $.ajax({
    method: "POST",
    url: 'formprocessor.php',
    data: { name:name, mail:mail, comp:comp, umsg:umsg},
    success: function(response){
        answer.textContent = response;
    },
    error: function(xhr, status, error){
        answer.textContent = response;
    }
});
    body[0].appendChild(answer);
    setTimeout(() => {
            answer.style.display = "none";
    }, 15000);
});










