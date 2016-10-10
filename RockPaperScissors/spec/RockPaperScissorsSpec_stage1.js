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

*/

describe("function rockPaperScissors", function() {
  
  it("should exist", function() { 
    expect(rockPaperScissors).toBeDefined();
    });
  it("should return an string", function() {
    expect(typeof rockPaperScissors()).toBe("string");
    });
  it("should return 'PAPER vs PAPER => tie!' when rockPaperScissors(PAPER,PAPER)", function() {
    expect(rockPaperScissors("PAPER","PAPER")).toBe("PAPER vs PAPER => tie!");
    });
  it("should return 'ROCK vs ROCK => tie!' when rockPaperScissors(ROCK,ROCK)", function() {
    expect(rockPaperScissors("ROCK","ROCK")).toBe("ROCK vs ROCK => tie!");
    });
  it("should return 'SCISSORS vs SCISSORS => tie!' when rockPaperScissors(SCISSORS,SCISSORS)", function() {
    expect(rockPaperScissors("SCISSORS","SCISSORS")).toBe("SCISSORS vs SCISSORS => tie!");
    });
  it("should return 'PAPER vs SCISSORS => SCISSORS wins!' when rockPaperScissors(PAPER,SCISSORS)", function() {
    expect(rockPaperScissors("PAPER","SCISSORS")).toBe("PAPER vs SCISSORS => SCISSORS wins!");
    });
  it("should return 'PAPER vs ROCK => PAPER wins!' when rockPaperScissors(PAPER,ROCK)", function() {
    expect(rockPaperScissors("PAPER","ROCK")).toBe("PAPER vs ROCK => PAPER wins!");
    });
  it("should return 'SCISSORS vs ROCK => ROCK wins!' when rockPaperScissors(SCISSORS,ROCK)", function() {
    expect(rockPaperScissors("SCISSORS","ROCK")).toBe("SCISSORS vs ROCK => ROCK wins!");
    });
  it("should return 'ROCK vs PAPER => PAPER wins!' when rockPaperScissors(ROCK,PAPER)", function() {
    expect(rockPaperScissors("ROCK","PAPER")).toBe("ROCK vs PAPER => PAPER wins!");
    });
  it("should return 'ROCK vs SCISSORS => ROCK wins!' when rockPaperScissors(ROCK,SCISSORS)", function() {
    expect(rockPaperScissors("ROCK","SCISSORS")).toBe("ROCK vs SCISSORS => ROCK wins!");
    });
  /*
  it("should be defined w/ one or two arguments", function() {
    expect(rockPaperScissors.length).toBe(2 || 1);
    });
  it("should return 'Fizz' when rockPaperScissors()", function() {
    expect(rockPaperScissors()).toBe("Fizz");
    });
  it("should be defined w/ one argument", function() {
    expect(rockPaperScissors.length).toBe(3);
    });
  it("should return a string", function() {
    expect(typeof rockPaperScissors(95,92,93)).toBe("string");
    });
  it("should return 'A' when rockPaperScissors(95,92,93)", function() {
    expect(rockPaperScissors(95,92,93)).toBe("A");
    });
it("should return 'B' when rockPaperScissors(85,81,89)", function() {
    expect(rockPaperScissors(85,81,89)).toBe("B");
    });
it("should return 'C' when rockPaperScissors(75,71,78)", function() {
    expect(rockPaperScissors(75,71,78)).toBe("C");
    });
it("should return 'D' when rockPaperScissors(65,61,68)", function() {
    expect(rockPaperScissors(65,61,68)).toBe("D");
    });
it("should return 'F' when rockPaperScissors(35,31,18)", function() {
    expect(rockPaperScissors(35,31,18)).toBe("F");
    }); 
it("should return 'Error' when rockPaperScissors(-1,-2,-3)", function() {
    expect(rockPaperScissors(-1,-2,-3)).toBe("Error");
    });
   
  it("should return 'drink coke' when rockPaperScissors(17)", function() {
    expect(rockPaperScissors(17)).toBe("drink coke");
    });
  it("should return 'drink coke' when rockPaperScissors(20)", function() {
    expect(rockPaperScissors(20)).toBe("drink beer");
    });
   it("should return 'drink coke' when rockPaperScissors(30)", function() {
    expect(rockPaperScissors(30)).toBe("drink whisky");
    });*/
});













