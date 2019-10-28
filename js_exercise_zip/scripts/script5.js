const SHIFT = document.querySelector("#bt5");
SHIFT.addEventListener("click", swap);

function swap(){
    const EAGLE = document.querySelector("#eagle");
    const ENTERPRICE = document.querySelector("#enterprice");

    const NEWEAGLE = ENTERPRICE.src;
    const NEWENTERPRICE = EAGLE.src;

    EAGLE.src=NEWEAGLE;
    ENTERPRICE.src=NEWENTERPRICE;
}
