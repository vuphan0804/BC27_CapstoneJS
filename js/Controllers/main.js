'use strict';
import Product from '../Models/Product.js';
import {getProductsAPI} from '../Services/productAPI.js';
import display from './display.js'
import {getProductsTypeAPI} from '../Services/productAPI.js'
init();
 function init() {
  
   getProductsAPI().then((result) => {
    console.log(result.data);
    const products = result.data;
    for ( let product of products){
      
      product = new Product(
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
      } 
    display(products);
    
  });
}

// function getProductType()

  const productType = document.getElementById('products-type')
  productType.addEventListener('change', () => {
  getProductsTypeAPI(productType.value).then( (result) => {
      const products = result.data ; 
      for ( let product of products) {
        product = new Product (
          product.name,
          product.price,
          product.price,
          product.screen,
          product.backCamera,
          product.frontCamera,
          product.img,
          product.desc,
          product.type
        )
      }
      display (products)
    })
    if (productType.value === 'Chọn loại sản phẩm') return init ()
    
  }) ; 






