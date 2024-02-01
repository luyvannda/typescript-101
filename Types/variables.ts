let movieTitle: string = "Amadeus";
movieTitle = "The monkey king";
// movieTitle = 8;

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "nine";

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true";

let nothing: null = null;
let foo: undefined = undefined;

// Types Inference

let tvShow = "The last of us";
tvShow = "the second one";
tvShow = 1;

let isFull = true;
isFull = false;
isFull = "full";

// Types: any is an escape hatch from typescript check and should be use sparingly.

let bigApple: any = "Big Apple";
bigApple = 1;
bigApple = false;
bigApple();
bigApple.indexOf();

// The only time when 'any' should be used it when we delayed declaring a variable's type because we don't know it type yet.

const movies = ["Batman Begin", "Titanic", "FastX", "Mission Impossible"];

let foundMovies: string;

for (let movie of movies) {
  if (movie === "Titanic") {
    foundMovies = "Titanic";
  }
}

foundMovies = 1;
foundMovies = true;
