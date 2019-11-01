const btns = document.querySelectorAll("button");
const hero = document.querySelector("#hero");

const walk = "walk 1s steps(8) infinite";

btns.forEach(btn => btn.addEventListener("click", animate));

function animate() {
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        hero.style.setProperty("--ani", "none");
        hero.style.setProperty("--speed", 0);
    } else {
        btns.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        hero.style.setProperty("--ani", this.dataset.ani);
        hero.style.setProperty("--speed", this.dataset.speed);
        hero.style.setProperty("--timing", this.dataset.timing);
    }
}
