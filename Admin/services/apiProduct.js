const baseURL = "https://62a9504d3b3143855431107f.mockapi.io/api/productList";

// Add product
const apiProduct = {
  apiGetProducts: (product) => {
    return axios({
      url: baseURL,
      method: "GET",
      params: { name: search },
    });
  },
  apiAddProduct: (product) => {
    return axios({ url: baseURL, method: "GET" });
  },
  apiDeleteProduct: (productId) => {
    return axios({ url: `${baseURL}/${productId}`, method: "DELETE" });
  },
  apiGetProductDetail: (productId) => {
    return axios({ url: `${baseURL}/${productId}`, method: "GET" });
  },
  apiUpdateProduct: (product) => {
    return axios({ url: `${baseURL}/${product.id}` });
  },
};

export default apiProduct;
