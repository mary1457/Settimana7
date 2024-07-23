const contatore = document.getElementById("contatore")
let secondi = 0;
window.addEventListener("load", function () {
    init();

})

function init() {

    if (parseInt(sessionStorage.getItem("secondi")) > 0) {

        secondi = parseInt(sessionStorage.getItem("secondi"));
    }

    setInterval(function () {
        secondi += 1;
        sessionStorage.setItem("secondi", secondi)
        contatore.innerText = sessionStorage.getItem("secondi");
    }, 1000);
}