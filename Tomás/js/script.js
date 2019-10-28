var guy = document.getElementById("guy");
var taxi = document.getElementById("taxi");
var lamborghini = document.getElementById("lambo");

function Jump() {
    guy.classList.toggle("animation-jump");
}

function Jumping() {
    guy.classList.toggle("animation-jumping");
}

function Kill() {
    guy.classList.toggle("animation-kill");
    lamborghini.classList.toggle("killguy");

}

function callTaxi() {
    taxi.classList.toggle("callTaxi");
    guy.classList.toggle("getInTaxi");
    guy.removeClass('callTaxi');

}
function Lambo() {
    lamborghini.classList.toggle("moveCar");
}

function Mirror() {
    guy.classList.toggle("mirror");
}
