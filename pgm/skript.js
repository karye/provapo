function frageAlder() {
    var alder = prompt("Hur gammal är du?");
    console.log("Hej Karim, din ålder är " + alder);

    if (alder < 20) {
        alert("Tråkigt! Be en kompis köpa ut!");
    } else {
        alert("Yipee! Köp ut en öl åt mig oxå!");
    }
}

function frageAdress() {
    var adress = prompt("Vart bor du?");
    console.log("Hej Karim, du bor på " + adress);
}