"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findCheapestProduct = function (products) {
    var minPrice = Infinity;
    var cheapProduct;
    products.forEach(function (product) {
        if (product.price < minPrice) {
            cheapProduct = product;
            minPrice = product.price;
        }
    });
    return cheapProduct;
};
var listOfProducts = [
    { id: 1, name: 'Product-1', price: 99, msrp: 99 },
    { id: 2, name: 'Product-2', price: 50, msrp: 99 },
    { id: 3, name: 'Product-3', price: 60, msrp: 99 },
];
console.log('Cheap Product is: ', findCheapestProduct(listOfProducts).name);
