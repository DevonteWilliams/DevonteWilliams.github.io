let i = 0;
let text = 'Shanks was wrongfully accused of 1st degree murder, as well as sentenced to 10-years of prison. He was as innocent as he was angry, and he has plenty means of revenge. He conjures up a plan, one that may only succeed once. He plots to escape the prison, with just a simple accomplice: You. It is your task to help him traverse through the prison before you get caught. You do not have a lot of time, you must be vigilant and swift. Do not fail me, I entrust you and ONLY you. May you reach him towards his freedom, and your own of course. You do not have to worry about a possible police chase, once you helped him escape I will handle that. What are you waiting for? GO!';
let speed = 60;
const testButton = document.querySelector("#playText");
testButton.addEventListener("click", textAppear);
// const textButton = document.querySelector("#playText")
// textButton.addEventListener("click", textAppear2)
function textAppear(){
if (i < text.length){
    document.querySelector(".text1").innerHTML += text.charAt(i);
    i++;
    setTimeout(textAppear, speed);
    }   
}

// function textAppear2(){
//     if (i >= text.length){
//         document.querySelector(".text2").innerHTML += text.charAt(i);
//         setTimeout(textAppear, speed);
//     }
// }

// function buttonDisappear() {
//     let x = document.getElementById("#playText");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
// }
