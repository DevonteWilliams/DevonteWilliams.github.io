function myFunction() {
    var x = document.getElementById("question");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showDoor() {
    let name = prompt('What is the code:');
    if (name == 4507) {
        alert("goedo!");
        window.location.href = "room3.html"
    } else alert("Incorrect code");

}