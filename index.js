var a=document.querySelectorAll(".drum")

for(var i=0;i<a.length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var button=this.innerHTML;
    animate(button);
    switch(button){
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;        

        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;   
            
        case "l":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        
        default:
 
    }
}  );
}

function click(ch){
    animate(ch);
    if(ch=='w'){
        var tom1=new Audio('sounds/tom-1.mp3');
        tom1.play();
    }
    else if(ch=='a'){
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
    }
    else if(ch=='s'){
        var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play();
    }
    else if(ch=='d'){
        var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play();
    }
    else if(ch=='j'){
        var snare=new Audio('sounds/snare.mp3');
        snare.play();
    }
    else if(ch=='k'){
        var crash=new Audio('sounds/crash.mp3');
        crash.play();
    }
    else if(ch=='l'){
        var kick=new Audio('sounds/kick-bass.mp3');
        kick.play();
    }
}

document.addEventListener("keypress",function(event){
    click(event.key);
});

function animate(ch){
    var active=document.querySelector("."+ch);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed")
    },100);
}
// function HouseKeeper(name,exp,duration){
//     this.name=name;
//     this.experience=exp;
//     this.duration=duration;
//     this.cleaning=function(){
//         alert("working in progress");
//     }
// }
