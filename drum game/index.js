var myvoice = new Audio("sounds/tom-3.mp3");
var sounds = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/kick-bass.mp3","sounds/crash.mp3"];
var mysounds=[];

for(var i=0;i<document.querySelectorAll("button.drum").length ; i++) {
    mysounds.push(new Audio(sounds[i]));
}

var keydown = document.querySelectorAll("button.drum");

for(var i=0;i<document.querySelectorAll("button.drum").length ; i++) {
    
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        soundplayer (this.innerHTML);
    });
}

document.addEventListener("keypress",function(e){
    soundplayer(e.key);
});

function soundplayer (key) {
    switch (key) {
        case "w": mysounds[0].play();
                  keydown[0].classList.add("pressed");
                  setTimeout(function(){
                      keydown[0].classList.remove("pressed");
                  },100);
            break;
        case "a": mysounds[1].play();
        keydown[1].classList.add("pressed");
        setTimeout(function(){
            keydown[1].classList.remove("pressed");
        },100);
  break;
        case "s": mysounds[2].play();   
        keydown[2].classList.add("pressed");
        setTimeout(function(){
            keydown[2].classList.remove("pressed");
        },100);
  break;
        case "d": mysounds[3].play();
        keydown[3].classList.add("pressed");
        setTimeout(function(){
            keydown[3].classList.remove("pressed");
        },100);
  break;
        case "j": mysounds[4].play();
                  keydown[4].classList.add("pressed");
                  setTimeout(function(){
                      keydown[4].classList.remove("pressed");
                  },100);
            break;
        case "k": mysounds[5].play();
                  keydown[5].classList.add("pressed");
                  setTimeout(function(){
                      keydown[5].classList.remove("pressed");
                  },100);
            break;
        case "l": mysounds[6].play();
                  keydown[6].classList.add("pressed");
                  setTimeout(function(){
                      keydown[6].classList.remove("pressed");
                  },100);
            break;

    };
}