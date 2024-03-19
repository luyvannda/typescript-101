const usersList: string[] = ["Joe", "Raksmey"];
usersList.push("Mike");
console.log(usersList);

const ageList: number[] = [35, 33];
ageList[0] = 36;
console.log(ageList);

const trueFalseAnswers: boolean[] = [true, false, false];

// alternative ways to declare a an array type
const nameArr: Array<string> = ["George", "Mina"];
const numArr: Array<number> = [1, 2, 3];
const bools: Array<boolean> = [true, false];

// example of declaring object type to use inside an array of object
type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

console.log(coords);
