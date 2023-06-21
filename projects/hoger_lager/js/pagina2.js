let playerScore = 8;
let rollPlayer = 0;
let CPURoll = 0;
let bid = 0;
let higher = "hoger";
let lower = "lager";

if (playerScore <= 0){
    alert("Je kan niet meer verderspelen")
    close()
}

function playerRoll(){
 rollPlayer = Math.floor(Math.random()* 6+1);
}


function computerRoll(){
 CPURoll = Math.floor(Math.random()* 6+1);
}

function startGame() {
    computerRoll()
    alert("Je hebt " + playerScore + " primora")
    bid = prompt("Hoeveel biedt je?")
    alert("De computer gooit " + CPURoll)
    let guess = prompt("Hoger of lager?");
    playerRoll()
    alert("Je gooit " + rollPlayer)
    if (rollPlayer > CPURoll) {
        if (guess == "hoger"){
            alert("Je hebt gewonnen")
            alert("Je wint " + bid + " primora")
            playerScore + bid
            console.log(playerScore)
        }
        if (guess == "lager"){
            alert("Je hebt verloren")
            alert("Je verliest " + bid + " primora")
            playerScore - bid
        }
    }

    if (rollPlayer < CPURoll) {
        if (guess == "hoger"){
            alert("Je hebt verloren")
            alert("Je verliest", bid, "primora")
            playerScore - bid
        }
        if (guess == "lager"){
            alert("Je hebt gewonnen")
            alert("Je wint " +  bid + " primora")
            playerScore + bid
            console.log(playerScore)
        }
    }
    // if (rollPlayer == CPURoll)
    // alert("Gelijkspel.")
    // alert("Je primora blijft hetzelfde.")
    
}