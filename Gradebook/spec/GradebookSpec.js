/*Kata: Grade book
Problem Description

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score Letter Grade

90 <= score <= 100      'A'
80 <= score < 90        'B'
70 <= score < 80        'C'
60 <= score < 70        'D'
0 <= score < 60         'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

Examples:

gradeBook(95,92,93) === "A"
gradeBook(85,81,89) === "B"
gradeBook(75,71,78) === "C"
gradeBook(20,10,25) === "F"
gradeBook(30,20,25) === "F"*/

describe("function Gradebook", function() {
  
  it("should exist", function() { 
    expect(Gradebook).toBeDefined();
    });
  it("should be defined w/ one argument", function() {
    expect(Gradebook.length).toBe(3);
    });
  it("should return a string", function() {
    expect(typeof Gradebook(95,92,93)).toBe("string");
    });
  it("should return 'A' when Gradebook(95,92,93)", function() {
    expect(Gradebook(95,92,93)).toBe("A");
    });
it("should return 'B' when Gradebook(85,81,89)", function() {
    expect(Gradebook(85,81,89)).toBe("B");
    });
it("should return 'C' when Gradebook(75,71,78)", function() {
    expect(Gradebook(75,71,78)).toBe("C");
    });
it("should return 'D' when Gradebook(65,61,68)", function() {
    expect(Gradebook(65,61,68)).toBe("D");
    });
it("should return 'F' when Gradebook(35,31,18)", function() {
    expect(Gradebook(35,31,18)).toBe("F");
    }); /*
it("should return 'Error' when Gradebook(-1,-2,-3)", function() {
    expect(Gradebook(-1,-2,-3)).toBe("Error");
    });
   
  it("should return 'drink coke' when Gradebook(17)", function() {
    expect(Gradebook(17)).toBe("drink coke");
    });
  it("should return 'drink coke' when Gradebook(20)", function() {
    expect(Gradebook(20)).toBe("drink beer");
    });
   it("should return 'drink coke' when Gradebook(30)", function() {
    expect(Gradebook(30)).toBe("drink whisky");
    });*/
});













