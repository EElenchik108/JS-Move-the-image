"use strict";

let pic = document.getElementsByClassName('pic')[0];
let body = document.body;
let x=0, y=0;
let intR;

function moveRight(){
    x+=5;
    pic.style.left = x+'px';		
}

function moveStop(){
    clearInterval(intR)	
}

function moveLeft(){
    x-=5;
    pic.style.left = x+'px';		
}

function moveTop(){
    y-=5;
    pic.style.top = y+'px';		
}

function moveBottom(){
    y+=5;
    pic.style.top = y+'px';		
}

function moveClear(){
    x=0;
    y=0;
    pic.style.top = '0px';
    pic.style.left = '0px';		
}

body.addEventListener('keydown', (event)=> {
    if(event.keyCode==38) {
        moveStop();
        intR=setInterval(moveTop, 100);	
        }
    else if(event.keyCode==39) {
        moveStop();
        intR=setInterval(moveRight, 100);	
        }
    else if(event.keyCode==37) {
        moveStop();
        intR=setInterval(moveLeft, 100);	
        }
    else if(event.keyCode==40) {
        moveStop();
        intR=setInterval(moveBottom, 100);	
        }
    else if(event.keyCode==32) moveStop()        
    else if(event.keyCode==46) {
        moveStop();
        moveClear()
    }			
})

//2 способ - движение только при каждом нажатии

/*window.onkeydown = function move(){
	if(event.keyCode==37){
		x-=5;
		pic.style.left = x + 'px';
	}
	else if(event.keyCode==39){
		x+=5;
		pic.style.left= x + 'px';
	}
	else if(event.keyCode==40){
		y+=5;
		pic.style.top= y + 'px';
	}
	else if(event.keyCode==38){
		y-=5;
		pic.style.top= y + 'px';
	}
	else if(event.keyCode==46){
		x=0, y=0;
		pic.style.top= '0px';
		pic.style.left= '0px';
	}
}*/