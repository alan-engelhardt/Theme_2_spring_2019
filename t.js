const rotbtn = document.querySelector("#rotbtn");
const boxElement = document.querySelector(".box");

rotbtn.addEventListener("click", animate);

function animate(){
    boxElement.classList.toggle("rot");
}
