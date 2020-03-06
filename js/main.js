console.log("sanity check!");

const squares = 
		[	"squareZero",
			"squareOne",
			"squareTwo",
			"squareZero0",
			"squareOne0",
			"squareTwo0",
			"squareZero00",
			"squareOne00",
			"squareTwo00"   ];

const circles =
		[	"circleZero",
			"circleOne",
			"circleTwo",
			"circleZero0",
			"circleOne0",
			"circleTwo0",
			"circleZero00",
			"circleOne00",
			"circleTwo00"];

const triangles = 
		[	"triangleZero",
			"triangleOne",
			"triangleTwo",
			"triangleZero0",
			"triangleOne0",
			"triangleTwo0",
			"triangleZero00",
			"triangleOne00",
			"triangleTwo00"];
// ====================================
//            Game Score 

var gameScore = 0;
var gameOver= false;

//            Timer
// ====================================
document.querySelector("#button #startGame").addEventListener("click", function(){
    var timeleft = 5;

    var startTimer = setInterval(function function1(){
    document.querySelector("#countdownTimer").innerHTML = `${timeleft} second(s) left!`;

    timeleft -= 1;
    if(timeleft <= -1){
        clearInterval(startTimer);
        document.querySelector("#countdownTimer").innerHTML = `GAME OVER! YOUR SCORE IS: ${gameScore}`;
  	gameOver = true;
    } 
    }, 1000);
    console.log(countdownTimer);
});

// ====================================
//      ADDING POPUP FOR SCORE
// ====================================



// ====================================
//          Shapes/Click Event 
// ====================================
//SQUARES// ====================================
document.querySelector('#s1 .square').addEventListener('click', handleClick)

let squareZero = document.querySelector('#s1 .square');
function handleClick(evt){
	console.log(evt.target.textContent);
	evt.target.remove();
	
};

document.querySelector('#s2 .square').addEventListener('click', handleClick)

let squareOne = document.querySelector('#s2 .square');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#s3 .square').addEventListener('click', handleClick)

let squareTwo = document.querySelector('#s3 .square');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};
	// ====================================
document.querySelector('#s01 .square').addEventListener('click', handleClick)

let squareZero0 = document.querySelector('#s01 .square');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#s02 .square').addEventListener('click', handleClick)

let squareOne0 = document.querySelector('#s02 .square');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#s03 .square').addEventListener('click', handleClick)

let squareTwo0 = document.querySelector('#s03 .square');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};
		// ====================================
document.querySelector('#s001 .square').addEventListener('click', handleClick)

let squareZero00 = document.querySelector('#s001 .square');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#s002 .square').addEventListener('click', handleClick)

let squareOne00 = document.querySelector('#s002 .square');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#s003 .square').addEventListener('click', handleClick)

let squareTwo00 = document.querySelector('#s003 .square');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

//CIRCLES// ====================================
document.querySelector('#c1 .circle').addEventListener('click', handleClick)

let circleZero = document.querySelector('#c1 .circle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#c2 .circle').addEventListener('click', handleClick)

let circleOne = document.querySelector('#c2 .circle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#c3 .circle').addEventListener('click', handleClick)

let circleTwo= document.querySelector('#c3 .circle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};
// ====================================
document.querySelector('#c01 .circle').addEventListener('click', handleClick)

let circleZero0 = document.querySelector('#c01 .circle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#c02 .circle').addEventListener('click', handleClick)

let circleOne0 = document.querySelector('#c02 .circle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#c03 .circle').addEventListener('click', handleClick)

let circleTwo0= document.querySelector('#c03 .circle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

// ====================================
document.querySelector('#c001 .circle').addEventListener('click', handleClick)

let circleZero00 = document.querySelector('#c001 .circle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#c002 .circle').addEventListener('click', handleClick)

let circleOne00 = document.querySelector('#c002 .circle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#c003 .circle').addEventListener('click', handleClick)

let circleTwo00= document.querySelector('#c003 .circle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

//TRIANGLES// ==================================== 

document.querySelector('#t1 .triangle').addEventListener('click', handleClick)

let triangleZero = document.querySelector('#t1 .triangle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#t2 .triangle').addEventListener('click', handleClick)

let triangleOne = document.querySelector('#t2 .triangle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#t3 .triangle').addEventListener('click', handleClick)

let triangleTwo = document.querySelector('#t3 .triangle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

// ====================================
document.querySelector('#t01 .triangle').addEventListener('click', handleClick)

let triangleZero0 = document.querySelector('#t01 .triangle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#t02 .triangle').addEventListener('click', handleClick)

let triangleOne0 = document.querySelector('#t02 .triangle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#t03 .triangle').addEventListener('click', handleClick)

let triangleTwo0 = document.querySelector('#t03 .triangle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

// ====================================
document.querySelector('#t001 .triangle').addEventListener('click', handleClick)

let triangleZero00 = document.querySelector('#t001 .triangle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();
	
};

document.querySelector('#t002 .triangle').addEventListener('click', handleClick)

let triangleOne00 = document.querySelector('#t002 .triangle');
function handleClick(evt){
	console.log(evt.target);
	evt.target.remove();

};

document.querySelector('#t003 .triangle').addEventListener('click', handleClick)

let triangleTwo00 = document.querySelector('#t003 .triangle');
function handleClick(evt){
	if (gameOver) {
		return false;
	}	//prints & adds values of game score as whole number (not as an integer)
	gameScore = gameScore + parseInt(evt.target.dataset.hide,10);
	console.log(gameScore + parseInt(evt.target.dataset.hide, 10));
	console.log(evt.target.dataset.hide);
	evt.target.remove();
	
};

// ====================================
//      ADDING VALUES TO SHAPES
// ====================================

var allSquares = document.querySelectorAll('.square');
	allSquares.forEach( function(elem){

  var squareRand = Math.floor((Math.random() * 21));
  	elem.setAttribute("data-hide", squareRand);
  	
  	

});
 		

var allCircles = document.querySelectorAll('.circle');
	allCircles.forEach(function(elem){

		var circleRand = Math.floor((Math.random()*21));
		elem.setAttribute("data-hide", circleRand);
	});

var allTriangles = document.querySelectorAll('.triangle');
	allTriangles.forEach(function(elem) {

		var triangleRand = Math.floor((Math.random()*21));
		elem.setAttribute("data-hide", triangleRand);
	});






