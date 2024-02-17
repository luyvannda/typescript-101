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

type Point = {
  x: number;
  y: number;
};

const getCoordinate = (): Point => {
  return { x: 2, y: 4 };
};

console.log(getCoordinate());

const doubleCoordinate = (point: Point): Point => {
  return { x: point.x * 2, y: point.y * 2 };
};
console.log(doubleCoordinate(getCoordinate()));

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
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} – ${song.artist}`);
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
