let age = prompt("Hoe oud ben je?");
if (age < 18){
    alert("Je bent niet welkom op de pagina.");
    close();
};

function showAlert() {

    alert("Het spel wordt gespeeld door 1 speler tegen een computer.");
    alert("De speler krijgt voor het spelen de kans om te bieden, (min. 1) je begint met 8 punten en kan er meer krijgen door te winnen, of minder als je verliest.");
    alert("Na het bieden druk je op Start en begint het spel.");
    alert("Beide spelers krijgen 1 dobbelsteen, de computer gooit eersten geeft aan hoeveel ogen het heeft gegooit.");
    alert("De speler krijgt daarna de optie om te selecteren of ze hoger of lager zullen gooien dan de computer.");
    alert("Als je goed hebt geraden win je, zo niet verlies je en kan je opnieuw proberen. Hierbij kan je meer of minder punten verdienen.");
    alert("Als je geen Primora meer hebt, stopt het spel en kan je niet verder spelen.");

   
};

function exit(){
alert("De pagina wordt gesloten.");
close();
};