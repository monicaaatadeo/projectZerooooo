console.log("sanity check!");

// ====================================
//              SHAPES
// ====================================

function startGame () {
	score = new component("30px", "Consolas", "black", 280, 40, "text");
	game.start();
}

function gameArea (){

}

function gameScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}




