/*Kata: FizzBuzz
Problem Description

Imagine the scene. You are eleven years old, and in the five minutes before the end of the lesson, your Maths teacher decides he should make his class more "fun" by introducing a "game". He explains that he is going to point at each pupil in turn and ask them to say the next number in sequence, starting from one. The "fun" part is that if the number is divisible by three, you instead say "Fizz" and if it is divisible by five you say "Buzz". So now your maths teacher is pointing at all of your classmates in turn, and they happily shout "one!", "two!", "Fizz!", "four!", "Buzz!"... until he very deliberately points at you, fixing you with a steely gaze... time stands still, your mouth dries up, your palms become sweatier and sweatier until you finally manage to croak "Fizz!". Doom is avoided, and the pointing finger moves on.

So of course in order to avoid embarassment infront of your whole class, you have to get the full list printed out so you know what to say. Your class has about 33 pupils and he might go round three times before the bell rings for breaktime. Next maths lesson is on Thursday. Get coding!

Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz?".

Sample output:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
... etc up to 100

Stage 2 - new requirements

A number is fizz if it is divisible by 3 or if it has a 3 in it
A number is buzz if it is divisible by 5 or if it has a 5 in it*/

describe("function FizzBuzz", function() {
  
  it("should exist", function() { 
    expect(FizzBuzz).toBeDefined();
    });
  it("should return an string", function() {
    expect(typeof FizzBuzz()).toBe("string");
    });
  /*
  describe("function fizzBuzz", function() {


 it("should exist", function() {
    expect(fizzBuzz).toBeDefined();
 });

 it("should return an array", function() {
    expect(typeof fizzBuzz()).toBe("object");
 });

 it("array length = 100", function() {
    expect(fizzBuzz().length).toBe(100);
 });

 it("array position is divisible by 3 print Fizz", function() {
   var result = fizzBuzz();
    expect(result[6]).toBe("Fizz");
 });

 it("array position is divisible by 5 print Buzz", function() {
   var result = fizzBuzz();
    expect(result[10]).toBe("Buzz");
 });

it("array position is divisible by 5 and 3 print FizzBuzz", function() {
   var result = fizzBuzz();
    expect(result[15]).toBe("FizzBuzz");
 });

 
});
  
  it("should return 'Fizz' when FizzBuzz()", function() {
    expect(FizzBuzz()).toBe("Fizz");
    });
  it("should be defined w/ one argument", function() {
    expect(FizzBuzz.length).toBe(3);
    });
  it("should return a string", function() {
    expect(typeof FizzBuzz(95,92,93)).toBe("string");
    });
  it("should return 'A' when FizzBuzz(95,92,93)", function() {
    expect(FizzBuzz(95,92,93)).toBe("A");
    });
it("should return 'B' when FizzBuzz(85,81,89)", function() {
    expect(FizzBuzz(85,81,89)).toBe("B");
    });
it("should return 'C' when FizzBuzz(75,71,78)", function() {
    expect(FizzBuzz(75,71,78)).toBe("C");
    });
it("should return 'D' when FizzBuzz(65,61,68)", function() {
    expect(FizzBuzz(65,61,68)).toBe("D");
    });
it("should return 'F' when FizzBuzz(35,31,18)", function() {
    expect(FizzBuzz(35,31,18)).toBe("F");
    }); 
it("should return 'Error' when FizzBuzz(-1,-2,-3)", function() {
    expect(FizzBuzz(-1,-2,-3)).toBe("Error");
    });
   
  it("should return 'drink coke' when FizzBuzz(17)", function() {
    expect(FizzBuzz(17)).toBe("drink coke");
    });
  it("should return 'drink coke' when FizzBuzz(20)", function() {
    expect(FizzBuzz(20)).toBe("drink beer");
    });
   it("should return 'drink coke' when FizzBuzz(30)", function() {
    expect(FizzBuzz(30)).toBe("drink whisky");
    });*/
});













