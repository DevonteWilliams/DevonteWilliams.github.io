// let x = true;
// while (x = true) {

let i = -1;

let text = 'welkom in jouw cel. misschien wordt het eens tijd om te ontsnappen. los de raadsel op en zorg dat je hier weg komt! ';

let speed = 25;



function textAppear() {

    if (i < text.length) {

        document.querySelector(".text-dialogue").innerHTML += text.charAt(i);

        i++;

        setTimeout(textAppear, speed);
    }

    if (i >= text.length) {
        let firstPuzzle = prompt("Kevin's mom has 4 kids: north, east, west and.. ?");

        if (firstPuzzle === "Kevin") {
            console.log(firstPuzzle);
            alert("Goed zo!")
            window.location.href = "room2.html" //  document.getElementById("prompt1")

        } else {
            alert("helaas, je hebt het fout.")
        }
    }

}


const testButton = document.querySelector("#dialogue");

testButton.addEventListener("click", textAppear);


// let firstPuzzle = prompt("Jantje's moeder heeft drie kinderen. Kwik, kwek en ...?");

// if (firstPuzzle === "Jantje") {
//     console.log(firstPuzzle);
//     alert("Goed zo!")
//     document.getElementById("prompt1")

// }
// else {
//     alert("helaas, je hebt het fout.")
//     if(firstPuzzle === "Jantje"){
//  }
// }
// }


const promptButton = document.querySelector("#prompt1")
promptButton.addEventListener("click", Riddle1())


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }`