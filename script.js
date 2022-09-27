var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");
//function to avoid repeating on each event listener
function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}
//Left side of gradient change
color1.addEventListener("input", setGradient);
//Right side of gradient change
color2.addEventListener("input", setGradient);
