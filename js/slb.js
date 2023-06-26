const slbContainer = document.querySelector(".slb-container");
const iframeLocation = document.querySelector(".iframe-js");
const ictButton = document.querySelector(".ict-button");
const qualitiesButton = document.querySelector(".qualities-button");
const selfReflectionButton = document.querySelector(".selfreflection-button");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const ictImageArray = ["/images/LOB/ICT-beroep/Verslag ICT-Beroep-1.jpg", "/images/LOB/ICT-beroep/Verslag ICT-Beroep-2.jpg", "/images/LOB/ICT-beroep/Verslag ICT-Beroep-3.jpg", "/images/LOB/ICT-beroep/Verslag ICT-Beroep-4.jpg", "/images/LOB/ICT-beroep/Verslag ICT-Beroep-5.jpg"];
const qualitiesImageArray = ["/images/LOB/Kwaliteiten/Kwaliteiten-1.jpg", "images/LOB/Kwaliteiten/Kwaliteiten-2.jpg"];
const selfreflectionImageArray = ["/images/LOB/Zelfreflectie/Zelfreflectie-1.jpg", "/images/LOB/Zelfreflectie/Zelfreflectie-2.jpg", "/images/LOB/Zelfreflectie/Zelfreflectie-3.jpg", "/images/LOB/Zelfreflectie/Zelfreflectie-4.jpg"];
ictButton.addEventListener("click", showIctIframe);
qualitiesButton.addEventListener("click", showQualitiesIframe);
selfReflectionButton.addEventListener("click", showSelfReflectionIframe);
leftButton.addEventListener("click", leftIframeButton);
rightButton.addEventListener("click", rightIframeButton);
let i = 0;
let currentWindow = 0;

function showIctIframe(){
    iframeLocation.src = ictImageArray[0];
    i = 0;
    currentWindow = 0;
};

function showQualitiesIframe(){
    iframeLocation.src = qualitiesImageArray[0];
    i = 0;
    currentWindow = 1;
};

function showSelfReflectionIframe(){
    iframeLocation.src = selfreflectionImageArray[0];
    i = 0;
    currentWindow = 2;
};

function leftIframeButton(){
    i--
    if(i < 0){
        i++
    }
    console.log(i);

    if (currentWindow === 0) {
        iframeLocation.src = ictImageArray[i];
    } else if (currentWindow === 1) {
        iframeLocation.src = qualitiesImageArray[i];
    } else {
        iframeLocation.src = selfreflectionImageArray[i];
    };
};

function rightIframeButton(){
    i++
    console.log(i);

    if(currentWindow === 0){
        if(i >= ictImageArray.length){
            i--
        }
        iframeLocation.src = ictImageArray[i];
    }else if(currentWindow === 1){
        if(i >= qualitiesImageArray.length){
            i--
        }
        iframeLocation.src = qualitiesImageArray[i];
    }else{
        if(i >= selfreflectionImageArray.length){
            i--
        }
        iframeLocation.src = selfreflectionImageArray[i];
    };
};