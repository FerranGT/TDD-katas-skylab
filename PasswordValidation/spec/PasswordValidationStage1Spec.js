/*Kata: Password Validation
Problem Description

Create a function passwordValidation() that receives a string 
and returns true when:

the string contains at least one letter in uppercase
the string contains at least 2 numbers (digits)
the string contains at least one of these special characters: $ # % & - ! ?
the string has 10 characters or more
Otherwise the function should return true*/

describe("function passwordValidation", function() {
  
  it("function passwordValidation should exist", function() { 
    expect(passwordValidation).toBeDefined();
    });
  it("function passwordValidation should return an string", function() {
    expect(typeof passwordValidation("password")).toBe("string");
    });
  it("function passwordValidation should be defined w/ one argument", function() {
    expect(passwordValidation.length).toBe(1);
    });
  it("function passwordValidation should return 'true' when password contains one letter in uppercase", function() {
    expect(passwordValidation("pasSword")).toBe("true");
    });
  it("function passwordValidation should return 'true' when password contains at least 2 numbers (digits)", function() {
    expect(passwordValidation("password11")).toBe("true");
    });
  it("function passwordValidation should return 'true' when password contains at least one of these special characters: $ # % & - ! ?", function() {
    expect(passwordValidation("password!")).toBe("true");
    });
  it("function passwordValidation should return 'true' when password has 10 characters or more", function() {
    expect(passwordValidation("passworddd")).toBe("true");
    });
  /*
  it("should return a string", function() {
    expect(typeof passwordValidation(95,92,93)).toBe("string");
    });
  it("should return 'A' when passwordValidation(95,92,93)", function() {
    expect(passwordValidation(95,92,93)).toBe("A");
    });
it("should return 'B' when passwordValidation(85,81,89)", function() {
    expect(passwordValidation(85,81,89)).toBe("B");
    });
it("should return 'C' when passwordValidation(75,71,78)", function() {
    expect(passwordValidation(75,71,78)).toBe("C");
    });
it("should return 'D' when passwordValidation(65,61,68)", function() {
    expect(passwordValidation(65,61,68)).toBe("D");
    });
it("should return 'F' when passwordValidation(35,31,18)", function() {
    expect(passwordValidation(35,31,18)).toBe("F");
    }); 
it("should return 'Error' when passwordValidation(-1,-2,-3)", function() {
    expect(passwordValidation(-1,-2,-3)).toBe("Error");
    });
   
  it("should return 'drink coke' when passwordValidation(17)", function() {
    expect(passwordValidation(17)).toBe("drink coke");
    });
  it("should return 'drink coke' when passwordValidation(20)", function() {
    expect(passwordValidation(20)).toBe("drink beer");
    });
   it("should return 'drink coke' when passwordValidation(30)", function() {
    expect(passwordValidation(30)).toBe("drink whisky");
    });*/
});













