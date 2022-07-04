'use strict';
import Product from '../Models/Product';
import { getProductsAPI } from '../Services/productAPI';
init();
function init() {
  getProductsAPI().then((result) => {
    console.log(result.data);
    const products = result.data;
    products.forEach(() => {
      let product = products[i];
      products[i] = new Product(
        product.name,
        product.price,
        product.price,
        product.screen,
        product.backCamera,
        product.frontCamera,
        product.img,
        product.desc,
        product.type
      );
    });
    display(products);
  });
}
