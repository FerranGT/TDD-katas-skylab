/*Kata: Password Validation
Problem Description

Create a function passwordValidation() that receives a string 
and returns true when:

the string contains at least one letter in uppercase
the string contains at least 2 numbers (digits)
the string contains at least one of these special characters: $ # % & - ! ?
the string has 10 characters or more
Otherwise the function should return true

Stage 2 - config variable

Modify the previous function to use a variable called config being this one
an object with the rules to apply in the validation.

This object should have the following structure:

config = {
    size : 10,
    uppercase : 1,
    numbers : 2,
    special = "$#%&-!?"
}
Modify the function to read the "rules" from this object,

After this modification the behaviour should be same (so the tests should pass the same)

Stage 3 - config parameter

Modify the previous function to receive a second (optional) parameter that will overwrite
the config variable if is passed to the function.

With this change we should be able to use our function with different rules specified
in this (extra) parameter and also have a default behaviour if is not passed.

*/

describe("function passwordValidation", function() {
  
  it("function passwordValidation should exist", function() { 
    expect(passwordValidation).toBeDefined();
    });
  it("function passwordValidation should return a bolean", function() {
    expect(typeof passwordValidation("password")).toBe("boolean");
    });
  it("function passwordValidation should be defined w/ one argument", function() {
    expect(passwordValidation.length).toBe(2);
    });
  it("function passwordValidation should return 'true' when password contains all the specifications", function() {
    expect(passwordValidation("PASSW99RDqq$qq")).toBe(true);
    });
  it("function passwordValidation should return 'false' when password no contains all the specifications", function() {
    expect(passwordValidation("password")).toBe(false);
    });
  it("function passwordValidation should return 'true' when password contains at least 2 numbers (digits)", function() {
    expect(passwordValidation("pa33srwfSs66Fdd",config = {size : 12, uppercase : 2, numbers : 3, special : "fgt"})).toBe(true);
    });
  /*
  it("function passwordValidation should return 'true' when password contains at least 2 numbers (digits)", function() {
    expect(passwordValidation("password11")).toBe(true);
    });
  it("function passwordValidation should return 'true' when password contains at least one of these special characters: $ # % & - ! ?", function() {
    expect(passwordValidation("password!")).toBe(true);
    });
  it("function passwordValidation should return 'true' when password has 10 characters or more", function() {
    expect(passwordValidation("passworddd")).toBe(true);
    });
  
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













