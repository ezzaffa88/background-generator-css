var h3 = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
function setColor(){
    document.body.style.background =
     "linear-gradient(to right , " 
    +  color1.value 
    +"," 
    + color2.value 
    +")";
    h3.textContent = document.body.style.background + ";";

}
color1.addEventListener("input",setColor)
color2.addEventListener("input",setColor)