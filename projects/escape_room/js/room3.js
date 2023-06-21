let i = 0;

let text = 'Beantwoord deze vragen goed en je mag verder..';

let speed = 25;



function textAppear() {

    if (i < text.length) {

        document.querySelector("#dialogue").innerHTML += text.charAt(i);

        i++;

        setTimeout(textAppear, speed);

    }

    if (i >= text.length) {
        let question = prompt("what is the capital of America.. ?");

        if (question === "Washington DC") {
            alert("goedzo!");
            let question2 = prompt("kapmes - (min)mes - kap omdraaien - geld voor het huidige woord - d veranderd in k - g veranderd in m");
            if (question2 === "melkpak") {
                alert("goedzo! u mag verder -->");
                window.location.href = "room4.html"
            } else {
                alert("je hebt het helaas fout maat")
            }
        } else {
            alert("Helaas, je hebt het fout.")
        }
    }

}



const testButton = document.querySelector("#text-btn");

testButton.addEventListener("click", textAppear);