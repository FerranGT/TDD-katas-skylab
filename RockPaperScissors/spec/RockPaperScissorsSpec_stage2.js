/*Kata: Rock Paper Scissors!
Problem Description

We need a function rockPaperScissors() that can receive two parameters with the move of each of the two players in the game "Rock Paper Scissors".

The possible values are : "PAPER", "SCISSORS" or "ROCK"

If the function is called with only one parameter the move of the second player should be randomly generated.

>> rockPaperScissors("PAPER","SCISSORS")
"PAPER vs SCISSORS => SCISSORS wins!"

>> rockPaperScissors("ROCK","ROCK")
"ROCK vs ROCK => tie!"

>> rockPaperScissors("PAPER")
"PAPER vs ROCK => PAPER wins!"

>> rockPaperScissors("PAPER")
"PAPER vs PAPER => tie!"

Stage 2 - new requirements

Create an object called game with the following structure:

game = {
  player1: 0,
  player2: 0,
  rockPaperScissors : function() {...},
  winner: function() {...}
}
With this object created when we call the method game.rockPaperScissors() we store in player1 or player1 the number of games each player have won. When calling the method game.winner() we should receive a string telling which player is winning.

>>  game.rockPaperScissors("PAPER","SCISSORS")
"PAPER vs SCISSORS => SCISSORS wins!"

>> game.rockPaperScissors("ROCK","ROCK")
"ROCK vs ROCK => tie!"

>> game.rockPaperScissors("PAPER")
"PAPER vs ROCK => PAPER wins!"

>> game.rockPaperScissors("PAPER")
"PAPER vs PAPER => tie!"

>> game.rockPaperScissors("ROCK","SCISSORS")
"ROCK vs SCISSORS => ROCK wins!"

>> game.winner()
"player1 is winning!"

*/

describe("function game.rockPaperScissors", function() {
  
  it("should exist", function() { 
    expect(game.rockPaperScissors).toBeDefined();
    });
  it("should return an string when game.rockPaperScissors()", function() {
    expect(typeof game.rockPaperScissors()).toBe("string");
    });
  it("should return 'PAPER vs PAPER => tie!' when game.rockPaperScissors(PAPER,PAPER)", function() {
    expect(game.rockPaperScissors("PAPER","PAPER")).toBe("PAPER vs PAPER => tie!");
    });
  it("should return 'ROCK vs ROCK => tie!' when game.rockPaperScissors(ROCK,ROCK)", function() {
    expect(game.rockPaperScissors("ROCK","ROCK")).toBe("ROCK vs ROCK => tie!");
    });
  it("should return 'SCISSORS vs SCISSORS => tie!' when game.rockPaperScissors(SCISSORS,SCISSORS)", function() {
    expect(game.rockPaperScissors("SCISSORS","SCISSORS")).toBe("SCISSORS vs SCISSORS => tie!");
    });
  it("should return 'PAPER vs SCISSORS => SCISSORS wins!' when game.rockPaperScissors(PAPER,SCISSORS)", function() {
    expect(game.rockPaperScissors("PAPER","SCISSORS")).toBe("PAPER vs SCISSORS => SCISSORS wins!");
    });
  it("should return 'PAPER vs ROCK => PAPER wins!' when game.rockPaperScissors(PAPER,ROCK)", function() {
    expect(game.rockPaperScissors("PAPER","ROCK")).toBe("PAPER vs ROCK => PAPER wins!");
    });
  it("should return 'SCISSORS vs ROCK => ROCK wins!' when game.rockPaperScissors(SCISSORS,ROCK)", function() {
    expect(game.rockPaperScissors("SCISSORS","ROCK")).toBe("SCISSORS vs ROCK => ROCK wins!");
    });
  it("should return 'ROCK vs PAPER => PAPER wins!' when game.rockPaperScissors(ROCK,PAPER)", function() {
    expect(game.rockPaperScissors("ROCK","PAPER")).toBe("ROCK vs PAPER => PAPER wins!");
    });
  it("should return 'ROCK vs SCISSORS => ROCK wins!' when game.rockPaperScissors(ROCK,SCISSORS)", function() {
    expect(game.rockPaperScissors("ROCK","SCISSORS")).toBe("ROCK vs SCISSORS => ROCK wins!");
    });
  it("should return an string when game.winner()", function() {
    expect(typeof game.winner()).toBe("string");
    });
  /*
  it("should be defined w/ one or two arguments", function() {
    expect(game.rockPaperScissors.length).toBe(2 || 1);
    });
  it("should return 'Fizz' when game.rockPaperScissors()", function() {
    expect(game.rockPaperScissors()).toBe("Fizz");
    });
  it("should be defined w/ one argument", function() {
    expect(game.rockPaperScissors.length).toBe(3);
    });
  it("should return a string", function() {
    expect(typeof game.rockPaperScissors(95,92,93)).toBe("string");
    });
  it("should return 'A' when game.rockPaperScissors(95,92,93)", function() {
    expect(game.rockPaperScissors(95,92,93)).toBe("A");
    });
it("should return 'B' when game.rockPaperScissors(85,81,89)", function() {
    expect(game.rockPaperScissors(85,81,89)).toBe("B");
    });
it("should return 'C' when game.rockPaperScissors(75,71,78)", function() {
    expect(game.rockPaperScissors(75,71,78)).toBe("C");
    });
it("should return 'D' when game.rockPaperScissors(65,61,68)", function() {
    expect(game.rockPaperScissors(65,61,68)).toBe("D");
    });
it("should return 'F' when game.rockPaperScissors(35,31,18)", function() {
    expect(game.rockPaperScissors(35,31,18)).toBe("F");
    }); 
it("should return 'Error' when game.rockPaperScissors(-1,-2,-3)", function() {
    expect(game.rockPaperScissors(-1,-2,-3)).toBe("Error");
    });
   
  it("should return 'drink coke' when game.rockPaperScissors(17)", function() {
    expect(game.rockPaperScissors(17)).toBe("drink coke");
    });
  it("should return 'drink coke' when game.rockPaperScissors(20)", function() {
    expect(game.rockPaperScissors(20)).toBe("drink beer");
    });
   it("should return 'drink coke' when game.rockPaperScissors(30)", function() {
    expect(game.rockPaperScissors(30)).toBe("drink whisky");
    });*/
});













