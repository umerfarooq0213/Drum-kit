let number = document.querySelectorAll(".drum").length

for(let i=0; i<number; i++)

document.querySelectorAll(".drum")[i].addEventListener("click", handclick);

function handclick(){

    let drumm = this.innerHTML;
    keyboardsound(drumm)

    btnanimation(drumm);
}

document.addEventListener("keypress", function(event){
    keyboardsound(event.key);
    btnanimation(event.key);
});


function keyboardsound(key) {
    switch (key) {
        case "f":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
        case "s":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
        case "d":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    
        default: console.log(keyboardsound);
    }
}


function btnanimation(currentkey){
    let activebtn = document.querySelector("." + currentkey);
    activebtn.classList.add("pressed");

    setTimeout(function () {
        activebtn.classList.remove("pressed");
    },1000);
}