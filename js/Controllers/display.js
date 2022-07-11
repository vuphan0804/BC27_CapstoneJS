'use strict'
function display (products) {
    let html = '' ; 
    for (let product of products) {
        
        html += `
        <div class="col mb-5">
        <div class="card h-100">
          <!-- Product image--> 
          <img
            class="card-img-top"
            src="${product.img}"
            alt="..."
          />
          <!-- Product details-->
          <div class="card-body p-4">
            <div class="text-center">
              <!-- Product name-->
              <h5 class="fw-bolder">${product.name}</h5>
              <!-- Product price-->
              <p>${product.price}$</p>
              <p>${product.desc}</p>
            </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              

            <a class="btn btn-outline-dark mt-auto add-to-cart" data-type = "add"
                >View options</a
              >
              
              <div class="qty mt-5">
                <span class="minus bg-dark" data-id = "${product.id}" data-type = "decrease">-</span>
                <span id = "span${product.id}"> 0 </span>
                <span class="plus bg-dark" data-id = "${product.id}" data-type = "increase">+</span>
              </div>

          
            </div>
          </div>
        </div>
      </div>
        `

    }
    document.querySelector('#products-row').innerHTML = html;
    
}
export default display