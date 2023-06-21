const jsContainer = document.querySelector(".js-container");
const numberContainer = document.querySelector('.number-container');
const goalContainer = document.querySelector('.goal-container');
const sourceContainer = document.querySelector('.source-container');
const finishedContainer = document.querySelector('.finished-container');
const swmgImage = document.querySelector('.swmg-img');
let currentWindow = window.location.href;
const goals = [
    {
        learninGoal: "Gradient borders",
        source: "csstricks.nl",
        finished: false
    },
    {
        learninGoal: "Gradient ",
        source: "csstricks.nl",
        finished: false
    },
];

function addGoal(){
    goals.push({});
}

for (let i = 0; i < goals.length; i++) {
    const goal = goals[i];
}

let learningGoals = ["Gradient borders", "Minor CSS Animations", "Append Children"];
let Sources = ["https://css-tricks.com/gradient-borders-in-css/", "https://animate.style/", "https://www.w3schools.com/jsref/met_node_appendchild.asp"];
let Finished = [false, false, false];
if(currentWindow.includes("sequencePlan")){

    for (let i = 0; i < learningGoals.length; i++) {
        const learningGoalsArray = learningGoals[i];
        const sourcesArray = Sources[i];
        const finishedArray = Finished[i];
        numberContainer.innerHTML += ` <li class="list-group-item list-number ms-2 w-5 mb-1">${i + 1}</li>`
        goalContainer.innerHTML += `<li class="list-group-item list-goal ms-2 w-10 mb-1">${learningGoalsArray}</li>`
        sourceContainer.innerHTML += `<li class="list-group-item list-source ms-2 w-10 mb-1">${sourcesArray}</li>`
        finishedContainer.innerHTML += `<li class="list-group-item border-bottom list-finished ms-2 w-5 mb-1 text-danger">${finishedArray}</li>`
    }
}

if(currentWindow.includes("index")){
    const revealButton = document.querySelector(".reveal-errors");
    revealButton.addEventListener("click", revealImage)
}

function revealImage(){
    const hiddenImage = document.querySelector(".no-errors-image");
    hiddenImage.classList.remove("invisible");
}