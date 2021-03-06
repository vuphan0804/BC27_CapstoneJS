const baseUrl = 'https://62a9504d3b3143855431107f.mockapi.io/api/productList';

function getProductsAPI() {
  return axios({
    url: baseUrl,
    method: 'GET',
  });
}
function getProductsDetailAPI(productId) {
  return axios({
    url: `${baseUrl}/${productId}`,
    method: 'GET',
  });
}
function getProductsTypeAPI (type) {
  return axios ({
    url : baseUrl,
    method : "GET",
    params : {
      name : type,
    }
  })
}
export { getProductsAPI, getProductsTypeAPI, getProductsDetailAPI};
