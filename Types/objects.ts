// function printName(person: { first: string; last: string }): void {
//   console.log(`Hello Mr./Mrs ${person.first} ${person.last}!`);
// }

// printName({ first: "Tom", last: "Robinson" });

// let coordinate: { x: number; y: number } = { x: 82, y: 39 };

// const getCoordinate = (): { x: number; y: number } => {
//   return { x: Math.random(), y: Math.random() };
// };

// console.log(getCoordinate());

// printName({first: "Joe", last:"Biden", age: 79});

// const politician = { first: "Joe", last: "Biden", age: 79, isAlive: true };

// printName({first: politician.first , last: politician.last});

// type Point = {
//   x: number;
//   y: number;
// };

// const getCoordinate = (): Point => {
//   return { x: 2, y: 4 };
// };

// console.log(getCoordinate());

// const doubleCoordinate = (point: Point): Point => {
//   return { x: point.x * 2, y: point.y * 2 };
// };
// console.log(doubleCoordinate(getCoordinate()));

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  const payout = song.numStreams * 0.0033;

  // this line of code round up number to 2 decimal places
  const roundedPayout = payout.toFixed(2);
  return +roundedPayout;
}

function printSong(song: Song): void {
  console.log(`${song.title} – by ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North"
  }
};

const earnings: string = `$${calculatePayout(mySong)}`;
console.log(earnings);

printSong(mySong);

// the question mark '?' is used to make a property optional so its type can be number || undefined

type Point = {
  x: number;
  y: number;
  z?: number;
};

const getCoordinate = (): Point => {
  return { x: 2, y: 4 };
};

console.log(getCoordinate());

const doubleCoordinate = (point: Point): Point => {
  return { x: point.x * 2, y: point.y * 2 };
};
console.log(doubleCoordinate(getCoordinate()));

// readonly property cannot be changed or modified

type User = {
  readonly id: number;
  username: string;
};

const linuxUser: User = {
  id: 2,
  username: "Joe Joe"
};

console.log(linuxUser.id);

linuxUser.id = 3;

// intersection types is a way to combine two or more types together using an ampersand '&'

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 7,
  color: "green"
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const Mina: CatDog = {
  numLives: 3,
  breed: "husky",
  age: 5
};
