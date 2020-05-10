
var numberOfDrums = document.querySelectorAll(".drum").length;

var dictSound2 = {}
dictSound2["w"] = "sounds/tom-1.mp3";
dictSound2["a"] = "sounds/tom-2.mp3";
dictSound2["s"] = "sounds/tom-3.mp3";
dictSound2["d"] = "sounds/tom-4.mp3";
dictSound2["j"] = "sounds/snare.mp3";
dictSound2["k"] = "sounds/crash.mp3";
dictSound2["l"] = "sounds/kick-bass.mp3";


for (let i = 0; i < numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("mousedown",function(){
        this.style.color = "white";
        this.classList.add("pressed");
        audio = new Audio(dictSound2[this.classList[0]]);
        audio.play();

    });
}

for (let i = 0; i < numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("mouseup",function(){
        this.style.color = "#222831";
        this.classList.remove("pressed");
    });
}

document.addEventListener("keydown", ev => {
    let keyName = ev.key;
    if (keyName === "w" || keyName === "a" || keyName === "s" || keyName === "d" || keyName === "j" || keyName === "k" || keyName === "l")
    {
        document.getElementsByClassName(keyName)[0].style.color = "white";
        document.getElementsByClassName(keyName)[0].classList.add("pressed");
        audio = new Audio(dictSound2[keyName]);
        audio.play();
    }
});

document.addEventListener("keyup", ev => {
    let keyName = ev.key;
    if (keyName === "w" || keyName === "a" || keyName === "s" || keyName === "d" || keyName === "j" || keyName === "k" || keyName === "l")
    {
        document.getElementsByClassName(keyName)[0].style.color = "#222831";
        document.getElementsByClassName(keyName)[0].classList.remove("pressed");
    }
});
