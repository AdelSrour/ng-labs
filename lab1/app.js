//Q2
function logProduct(product) {
    //Log product details
    console.log("Product: ".concat(product.name, " with ID: ").concat(product.id, " and Price: ").concat(product.price, " ").concat(product.inStock ? "is in stock" : "is out of stock"));
}
var validProduct = {
    id: 15,
    name: "shoes",
    price: 500,
    inStock: true,
}; //Valid product
var badProduct = "Product doesn't exists"; //Invalid product
console.log(validProduct); //Print valid product
console.log(badProduct); //Print invalid product
//Q4
function wrapValue(value) {
    return [value];
}
var test = wrapValue("adel");
console.log(test);
//Bonus
function formatResults(response) {
    // Print product data on success
    if (response.success) {
        //I will use the function i already made above to print product
        logProduct(response.data);
    }
    else {
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
