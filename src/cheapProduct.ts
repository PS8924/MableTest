import { Product } from './model/product';

const findCheapestProduct = (products: Product[]): Product => {
  let minPrice = Infinity;
  let cheapProduct!: Product;

  products.forEach((product) => {
    if (product.price < minPrice) {
      cheapProduct = product;
      minPrice = product.price;
    }
  });

  return cheapProduct;
};

let listOfProducts = [
  { id: 1, name: 'Product-1', price: 99, msrp: 99, category: 'ABC' },
  { id: 2, name: 'Product-2', price: 50, msrp: 99, category: 'ABC' },
  { id: 3, name: 'Product-3', price: 60, msrp: 99, category: 'ABC' },
];

console.log('Cheap Product is: ', findCheapestProduct(listOfProducts).name);
