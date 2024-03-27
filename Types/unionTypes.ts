// Union type use '|' to create this type or this type kind of thing

let age: number | string = 12;
age = 14;
age = "28";
console.log(age);

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 12, y: 24 };
coordinates = { lat: 245.712, long: 14.085 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  const result = price * tax;

  return Number(result.toFixed(4)); // we use toFixed to limit the result to only 4 decimal places, however it will change result type to string, hence the need to convert it back to number.
}
console.log(calculateTax(45, 0.7));

// const nums: number[] = [1, 2, 3];
// const stuff: any[] = [1, "a", true];

const stuff: (number | string)[] = [1, 2, 3, "money"]; // use parenthesis ensure that the array can hold both number and string
let otherStuff: number[] | string[] = [2, 3, 4]; // this code means either is an array of number or an array of string but not both
otherStuff = ["1", "2", "3"];
console.log(otherStuff);

const coords: (Point | Loc)[] = [];
coords.push({ x: 234, y: 521 });
console.log(coords);

coords.push({ lat: 123.487, long: 423.123 });
console.log(coords);
