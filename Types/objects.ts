function printName(person: { first: string; last: string }): void {
  console.log(`Hello Mr./Mrs ${person.first} ${person.last}!`);
}

printName({ first: "Tom", last: "Robinson" });

let coordinate: { x: number; y: number } = { x: 82, y: 39 };

const getCoordinate = (): { x: number; y: number } => {
  return { x: Math.random(), y: Math.random() };
};

console.log(getCoordinate());
