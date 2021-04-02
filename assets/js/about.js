// document.querySelector(".wael-sound").addEventListener('click', function () {
//     playSound()
// });

function playSound() {
    var audio = new Audio("assets/sounds/tom-1.mp3");
    audio.play();
}

document.querySelector(".age").textContent = new Date().getFullYear() - 1996;