//Q1
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

//Q2
function logProduct(product: Product): void {
  //Log product details
  console.log(
    `Product: ${product.name} with ID: ${product.id} and Price: ${
      product.price
    } ${product.inStock ? "is in stock" : "is out of stock"}`
  );
}

//Q3
type ProductOrError = Product | string;

let validProduct: ProductOrError = {
  id: 15,
  name: "shoes",
  price: 500,
  inStock: true,
}; //Valid product
let badProduct: ProductOrError = "Product doesn't exists"; //Invalid product

console.log(validProduct); //Print valid product
console.log(badProduct); //Print invalid product

//Q4
function wrapValue<T>(value: T): T[] {
  return [value];
}

let test = wrapValue<string>("adel");
console.log(test);

//Q5
interface ApiResult<T> {
  data: T;
  success: boolean;
  message: string;
}

//Bonus
function formatResults(response: ApiResult<Product>): void {
  // Print product data on success
  if (response.success) {
    //I will use the function i already made above to print product
    logProduct(response.data);
  } else {
    //Maybe else we print the error message
    console.log(response.message);
  }
}

//First test the product fetch is successfull
formatResults({
  data: { id: 15, name: "shoes", price: 500, inStock: true },
  success: true,
  message: "",
});

//Second test the product doesn't exists
formatResults({
  data: { id: 0, name: "", price: 0, inStock: false },
  success: false,
  message: "Product doesn't exist",
});
