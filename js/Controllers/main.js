'use strict';
import Product from '../Models/Product.js';
import {getProductsAPI, getProductsDetailAPI} from '../Services/productAPI.js';
import display from './display.js'
import {getProductsTypeAPI} from '../Services/productAPI.js'
init();
 function init() {
  
   getProductsAPI().then((result) => {
    // console.log(result.data);
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
          product.id,
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
  // ===================================== Increment Decrement updateCartQuantity ============================================
let carts = []

document.querySelector('#products-row').addEventListener('click' , handleClick) ; 
function handleClick (event) {
  let type = event.target.getAttribute('data-type');
  let  id = event.target.getAttribute('data-id') ; 
  if (type === 'add') {
    cartNumbers () ; 
    console.log ('clicked')
  } 
  if (type === 'increase') {
    increment (id)
  }
  if ( type === 'decrease') {
    decrement (id)
  }
}

const increment = (productId) => {
  getProductsDetailAPI(productId).then(() => {
    let search = carts.find((existProduct) => existProduct.id === productId) 
    if (search === undefined) {
      carts.push({
        id : productId , 
        quantity : 1,
      })
    } else {
      search.quantity += 1 ; 
    }
    updateQuantity(productId)
  })
 
}
const decrement = (productId) => {
  getProductsDetailAPI(productId).then(() => {
    let search = carts.find((existProduct) => existProduct.id === productId) 
    if (search.quantity === 0) { return }
    else {
      search.quantity -= 1 ; 
    }
    updateQuantity(productId)
  })
}
const updateQuantity = (productId) => {
  let search = carts.find((existProduct) => existProduct.id === productId)
  document.getElementById(`span${productId}`).innerHTML = search.quantity
  cartQuantity()
}

let cartQuantity = () => {
  let cartIcon = document.querySelector('#cartAmount');
  let cartCalculation = carts
    .map((cartItem) => cartItem.quantity)
    .reduce((previousNumber, nextNumber) => previousNumber + nextNumber);
  cartIcon.textContent = cartCalculation;

  // console.log(carts);
};
  // ===================================== Increment Decrement updateCartQuantity End ==========================================   
  






