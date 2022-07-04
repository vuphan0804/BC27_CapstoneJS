const baseUrl = 'https://62a9504d3b3143855431107f.mockapi.io/api/productList';

function getProductsAPI() {
  return axios({
    url: baseUrl,
    method: 'GET',
  });
}
export { getProductsAPI };
