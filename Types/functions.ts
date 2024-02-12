// function square(num: number) {
//   return num * num;
// }

// function greet(person: string) {
//   return `Hi, ${person}!`;
// }

const doSomeThing = (person: string, age: number, isFunny: boolean) => {
  return `Let's hit ${person}, who is ${age} years old. It is ${
    isFunny ? "" : "not"
  } funny!!!`;
};
console.log(doSomeThing("Johnny", 76, false));

const greet = (person: string = "stranger"): string => `Hi, ${person}!`;

console.log(greet());
console.log(greet("Alex"));

function square(num: number): number {
  return num * num;
}

console.log(square(3));

const sum = (x: number, y: number): number => {
  return x + y;
};

console.log(sum(1, 5));

function random(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const colors = ["red", "orange", "yellow"];
const upperCaseColors = colors.map((color) => {
  return color.toUpperCase();
});

upperCaseColors;

// A void function will return nothing which is null or undefined

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  return "";
}

// Never type will ensure that the function never get a return and it useful to stop infinite loop situation

function makeError(msg: string): never {
  throw new Error(msg);
  return "";
}

function gameLoop(): never {
  while (true) {
    console.log("Game Loop is Running!");
  }
}
console.log(gameLoop());
