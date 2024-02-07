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
