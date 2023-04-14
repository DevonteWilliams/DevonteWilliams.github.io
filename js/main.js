const jsContainer = document.querySelector(".js-container")

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
    console.log(goal.learninGoal);
}


let learningGoals = ["Gradient borders", "Minor CSS Animations", ""];
let Sources = ["https://css-tricks.com/gradient-borders-in-css/", "https://animate.style/", ""];
let Finished = [false, false, false, false, false, false, false];


for (let i = 0; i < learningGoals.length; i++) {
    const learningGoalsArray = learningGoals[i];
    const sourcesArray = Sources[i];
    const finishedArray = Finished[i];
    jsContainer.innerHTML += `<ul class="list-group list-group-flush w-30 flex-row">
    <li class="list-group-item list-number ms-2 w-5 mb-1">${i + 1}</li>
    <li class="list-group-item list-goal ms-2 w-10 mb-1">${learningGoalsArray}</li>
    <li class="list-group-item list-source ms-2 w-10 mb-1">${sourcesArray}</li>
    <li class="list-group-item border-bottom list-finished ms-2 w-5 mb-1 text-danger">${finishedArray}</li>
    </ul>`
    console.log(i);
}

