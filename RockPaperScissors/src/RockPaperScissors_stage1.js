
function rockPaperScissors(player1,player2){
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
		return result = player1 + " vs " + player2 +" => SCISSORS wins!";
	}
	if (player1==="PAPER" && player2==="ROCK"){
		return result = player1 + " vs " + player2 +" => PAPER wins!";
	}
	if (player1==="SCISSORS" && player2==="ROCK"){
		return result = player1 + " vs " + player2 +" => ROCK wins!";
	}
	if (player1==="SCISSORS" && player2==="PAPER"){
		return result = player1 + " vs " + player2 +" => SCISSORS wins!";
	}
	if (player1==="ROCK" && player2==="PAPER"){
		return result = player1 + " vs " + player2 +" => PAPER wins!";
	}
	if (player1==="ROCK" && player2==="SCISSORS"){
		return result = player1 + " vs " + player2 +" => ROCK wins!";
	}
	return result;
}
	
