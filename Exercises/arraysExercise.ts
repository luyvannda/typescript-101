// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [24, 32, 12, 49];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [
  ["x", "o", "o", "x"],
  ["o", "x", "x"],
];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string;
  price: number;
};

const product1: Product = {
  name: "cofee mug",
  price: 11.5,
};

const product2: Product = {
  name: "Aloe Vera Gel",
  price: 36,
};

const product3: Product = {
  name: "Aloe Vera Tooth Gel",
  price: 9,
};
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const getTotal = (products: Product[]): number => {
  let total = 0;

  for (const product of products) {
    total += product.price;
  }
  return total;
};

const productArray: Product[] = [product1, product2, product3];
const totalPrice = getTotal(productArray);

console.log(`Total Price: $${totalPrice}`);
