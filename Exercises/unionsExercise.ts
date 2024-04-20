// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean

let highScore: number | boolean = 88;
highScore = true;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)

let stuff: number[] | string[] = [1, 2, 3];
stuff = ["Shoes", "Phone", "Charger"];
// stuff = [1, "Shoes"];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"

type SkillLevelType = "Beginner" | "Intermediate" | "Advanced" | "Expert";

let SkillLevel: SkillLevelType = "Intermediate";
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudentType = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevelType;
};

let SkiSchoolStudent: SkiSchoolStudentType = {
  name: "Joe",
  age: 35,
  sport: "ski",
  level: "Beginner",
};

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

type RGBColor = {
  r: number;
  g: number;
  b: number;
};

let RGB: RGBColor = {
  r: 255,
  g: 0,
  b: 0,
};

console.log(RGB);

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

type HSLColor = {
  h: number;
  s: number;
  l: number;
};

let HSL: HSLColor = {
  h: 0,
  s: 100,
  l: 50,
};

// Create an array called colors that can hold a mixture of RGB and HSL color types
let colors: (RGBColor | HSLColor)[] = [
  { r: 0, g: 255, b: 0 },
  { h: 100, s: 50, l: 0 },
];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

function greet(name: string | string[]): void {
  if (typeof name === "string") {
    console.log(`Hello, ${name}.`);
  } else {
    for (let n of name) {
      console.log(`Hello, ${n}.`);
    }
  }
}

greet("Joe");

let userName = ["Lilly", "Raksmey", "Dany"];

greet(userName);
