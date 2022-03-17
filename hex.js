const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//Targetting button with button id which is btn

const btn = document.getElementById ('btn');

//Targetting color with the color class
const color = document.querySelector(".color");

/* Setting EventListener so the hex color changes when the button is clicked,
also adding function to make the change */
btn.addEventListener('click', function() {
    let hexColor = '#';

//Setting loop for 6 times to get hex color change with random hex values
for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;

});
//Function to get randomized hex 
function getRandomNumber () {
    return Math.floor(Math.random() * hex.length);
}