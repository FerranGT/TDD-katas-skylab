/*Kata: Drink About
Problem Description

Kids drink toddy. Teens drink coke. Young adults drink beer. Adults drink whisky. Make a function that receive age, and return what they drink.

Rules:

Children under 14 old. Teens under 18 old. Young under 21 old. Adults have 21 or more.

Examples:

peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(20) === "drink beer"
peopleWithAgeDrink(30) === "drink whisky"*/

describe("function drinkAbout", function() {
  
  it("should exist", function() { 
    expect(drinkAbout).toBeDefined();
    });
  it("should be defined w/ one argument", function() {
    expect(drinkAbout.length).toBe(1);
    });
  it("should return a string", function() {
    expect(typeof drinkAbout(1)).toBe("string");
    });
  it("should return 'drink toddy' when drinkAbout(13)", function() {
    expect(drinkAbout(13)).toBe("drink toddy");
    });
  it("should return 'drink coke' when drinkAbout(17)", function() {
    expect(drinkAbout(17)).toBe("drink coke");
    });
  it("should return 'drink coke' when drinkAbout(20)", function() {
    expect(drinkAbout(20)).toBe("drink beer");
    });
   it("should return 'drink coke' when drinkAbout(30)", function() {
    expect(drinkAbout(30)).toBe("drink whisky");
    });
});













