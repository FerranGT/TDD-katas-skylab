var game = {
  player1: 0,
  player2: 0,
  rockPaperScissors : function(player1,player2){
  	var result="";
	var random=["PAPER","SCISSORS","ROCK"];
	if (typeof player2 === 'undefined'){
		var i=Math.floor(Math.random() * (3 - 0)) + 0;
		player2=random[i];
		//console.log(player2);
	}
	if (player1===player2){
		return result = player1 + " vs " + player2 +" => tie!";
	}
	if (player1==="PAPER" && player2==="SCISSORS"){
		game.player2 ++;
		return result = player1 + " vs " + player2 +" => SCISSORS wins!";
	}
	if (player1==="PAPER" && player2==="ROCK"){
		game.player1 ++;
		return result = player1 + " vs " + player2 +" => PAPER wins!";
	}
	if (player1==="SCISSORS" && player2==="ROCK"){
		game.player2 ++;
		return result = player1 + " vs " + player2 +" => ROCK wins!";
	}
	if (player1==="SCISSORS" && player2==="PAPER"){
		game.player1 ++;
		return result = player1 + " vs " + player2 +" => SCISSORS wins!";
	}
	if (player1==="ROCK" && player2==="PAPER"){
		game.player2 ++;
		return result = player1 + " vs " + player2 +" => PAPER wins!";
	}
	if (player1==="ROCK" && player2==="SCISSORS"){
		game.player1 ++;
		return result = player1 + " vs " + player2 +" => ROCK wins!";
	}
	return result;
},
winner: function() {
	if (game.player1===game.player2){
		return "Name same of victories both players";
	}
	if (game.player1>game.player2){
		return "player1 is winning!";
	}else{return "player2 is winning!";}
},
};













	
