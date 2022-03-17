// Constant colors variable with array elements
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// Targetting button with the button id

const btn = document.getElementById ('btn');

//Targetting color span class

const color = document.querySelector(".color");

/*Setting EventListener for click events, setting function for when button
is clicked, the background color changes */

btn.addEventListener("click", function() {
// get random number between 0 - 3 
const randomNumber = getRandomNumber();

document.body.style.backgroundColor = colors[randomNumber];
//Displays new color change 
color.textContent = colors[randomNumber];
});
/* Setting function to get a random number to change color, add math floor 
to found number */
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}