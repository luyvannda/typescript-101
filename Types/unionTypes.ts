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
