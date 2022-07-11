console.log("hello world");

import validation from "../middlewares/validation";
import Product from "../models/Product";
import apiProduct from "../services/apiProduct";

let productList = [];
console.log("productList");
const main = () => {
  apiProduct.apiGetProducts().then((result) => {
    const products = result.data;
    for (let product of products) {
      product = new Product(
        product.id,
        product.name,
        product.price,
        product.screen,
        product.backCamera,
        product.frontCamera,
        product.img,
        product.desc,
        product.type
      );
      productList.push(products[i]);
    }
    display(products);
  });
};
main();

const display = (products) => {
  let html = "";
  for (let product of products) {
    html += `
        <tr>
          <td>${i + 1}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.screen}</td>
          <td>${product.backCamera}</td>
          <td>${product.frontCamera}</td>
          <td>${product.img}</td>
          <td>${product.desc}</td>
          <td>${product.type}</td>
          <td>
            <button
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
              data-type="update"
              data-id="${product.id}"
            >
              Update
            </button>
            <button
              class="btn btn-danger"
              data-type="delete"
              data-id="${product.id}"
            >
              Delete
            </button>
          </td>
        </tr>
      `;
  }

  document.getElementById("tableProductList").innerHTML = html;
};

// Call API add product
const addProduct = () => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const screen = document.getElementById("screen").value;
  const backCamera = document.getElementById("backCamera").value;
  const frontCamera = document.getElementById("frontCamera").value;
  const img = document.getElementById("img").value;
  const desc = document.getElementById("desc").value;
  const type = document.getElementById("type").value;

  const product = new Product.Product(
    null,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
  validation.validationAdd(product);
  if (validation.validationAdd(product) !== false) {
    apiProduct
      .apiAddProduct(product)
      .then((result) => {
        main();
        resetForm();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

// Call API delete product
const deleteProduct = (productId) => {
  apiProduct
    .apiDeleteProduct(productId)
    .then(function () {
      main();
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Call API update product
const updateProduct = () => {
  const id = document.getElementById("idProduct").value; // hidden input
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const screen = document.getElementById("screen").value;
  const backCamera = document.getElementById("backCamera").value;
  const frontCamera = document.getElementById("frontCamera").value;
  const img = document.getElementById("img").value;
  const desc = document.getElementById("desc").value;
  const type = document.getElementById("type").value;

  const product = new product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
  validation.validationUpdate(product);
  if (validation.validationUpdate(product) !== false) {
    apiProduct
      .apiUpdateProduct(product)
      .then((result) => {
        main();
        resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

// Handle reset form and close modal
const resetForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("screen").value = "";
  document.getElementById("backCamera").value = "";
  document.getElementById("frontCamera").value = "";
  document.getElementById("img").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("type").value = "";
  $("#myModal").modal("hide");
};

// ==== DOM ====
// Show add modal
document.getElementById("btnAdd").addEventListener("click", showAddModal);
const showAddModal = () => {
  document.querySelector("#header-title").innerHTML = "Add product";
  document.querySelector(".modal-footer").innerHTML = `
    <button
      class="btn btn-primary"
      data-type="add"
    >
      Add
    </button>
    <button
      class="btn btn-secondary"
      data-toggle="modal"
      data-target="#myModal"
    >
      Cancel
    </button>
  `;
};

document.querySelector(".modal-footer").addEventListener("click", handleSubmit);
const handleSubmit = (event) => {
  const type = event.target.getAttribute("data-type");

  switch (type) {
    case "add":
      addProduct();
      break;
    case "update":
      updateProduct();
      break;
    default:
      break;
  }
};

document
  .getElementById("tableProductList")
  .addEventListener("click", handleProductAction);

const handleProductAction = (event) => {
  // Loại button (delete || update)
  const type = event.target.getAttribute("data-type");
  // Id của sản phẩm
  const id = event.target.getAttribute("data-id");

  switch (type) {
    case "delete":
      deleteProduct(id);
      break;
    case "update": {
      showUpdateModal(id);
      break;
    }

    default:
      break;
  }
};

const showUpdateModal = (productId) => {
  // Thay đổi text của modal heading/ modal footer
  document.querySelector(".modal-title").innerHTML = "Update product";
  document.querySelector(".modal-footer").innerHTML = `
    <button
      class="btn btn-primary"
      data-type="update"
    >
      Update
    </button>
    <button
      class="btn btn-secondary"
      data-dismiss="modal"
    >
      Cancel
    </button>
  `;

  // Call API get detail product
  apiProduct
    .apiGetProductDetail(productId)
    .then((result) => {
      const product = result.data;
      document.getElementById("idProduct").value = product.id;
      document.getElementById("name").value = product.name;
      document.getElementById("price").value = product.price;
      document.getElementById("screen").value = product.screen;
      document.getElementById("backCamera").value = product.backCamera;
      document.getElementById("frontCamera").value = product.frontCamera;
      document.getElementById("img").value = product.img;
      document.getElementById("desc").value = product.desc;
      document.getElementById("type").value = product.type;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// DOM input search
document.getElementById("txtSearch").addEventListener("keypress", handleSearch);
const handleSearch = (e) => {
  console.log(e);

  if (e.key !== "Enter") return;

  let value = e.target.value;
  apiProduct.apiGetProducts(value).then((result) => {
    const products = result.data;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      products[i] = new Product(
        product.id,
        product.name,
        product.price,
        product.sreen,
        product.backCamera,
        product.frontCamera,
        product.img,
        product.desc,
        product.type
      );
    }

    display(products);
  });
};
