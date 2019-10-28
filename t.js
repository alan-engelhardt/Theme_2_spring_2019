const h1 = document.querySelector("h1");
const hero = document.querySelector("#hero");
const flashBtn = document.querySelector("#flash");
const stopBtn = document.querySelector("#stop");

flashBtn.addEventListener("click", startAnimation);
stopBtn.addEventListener("click", stopAnimation);

function startAnimation(){
    hero.classList = "";
    hero.classList.add("flash");
}

function stopAnimation(){
    hero.classList = "";
    hero.classList.add("grow");
}


const firstname = "Keld";
const lastname = "Marple";

let fullname = "Welcome " + firstname + " " + lastname;

console.log(fullname);

h1.textContent = fullname;

fullname = "Alan Engelhardt";

console.log(fullname);
h1.textContent = fullname;

firstname = "Alan"
