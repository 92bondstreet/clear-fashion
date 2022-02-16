// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';
  
// current products on the page
let currentProducts = [];
let currentPagination = {};
let currentBrand = undefined;

// instantiate the selectors
const selectShow = document.querySelector('#show-select');
const selectPage = document.querySelector('#page-select');
const sectionProducts = document.querySelector('#products');
const spanNbProducts = document.querySelector('#nbProducts');
const selectBrands = document.querySelector('#brand-select');

/**
 * Set global value
 * @param {Array} result - products to display
 * @param {Object} meta - pagination meta info
 */
const setCurrentProducts = ({result, meta}) => {
  currentProducts = result;
  currentPagination = meta;
  currentBrand = selectBrands.value
};

/**
 * Fetch products from api
 * @param  {Number}  [page=1] - current page to fetch
 * @param  {Number}  [size=12] - size of the page
 * @return {Object}
 */
const fetchProducts = async (page = 1, size = 12, brand = undefined) => {
  try {
    let response = await fetch(
      `https://clear-fashion-api.vercel.app?page=${page}&size=${size}`);
    if(brand != undefined && brand != "undefined"){
      response = await fetch(
      `https://clear-fashion-api.vercel.app?page=${page}&size=${size}&brand=${brand}`
    );
    }
    
    
    const body = await response.json();

    if (body.success !== true) {
      console.error(body);
      return {currentProducts, currentPagination};
    }

    return body.data;
  } catch (error) {
    console.error(error);
    return {currentProducts, currentPagination};
  }
};

/**
 * Render list of products
 * @param  {Array} products
 */
const renderProducts = products => {
  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');
  const template = products
    .map(product => {
      return `
      <div class="product" id=${product.uuid}>
        <span>${product.brand}</span>
        <a href="${product.link}">${product.name}</a>
        <span>${product.price}</span>
      </div>
    `;
    })
    .join('');

  div.innerHTML = template;
  fragment.appendChild(div);
  sectionProducts.innerHTML = '<h2>Products</h2>';
  sectionProducts.appendChild(fragment);
};

/**
 * Render page selector
 * @param  {Object} pagination
 */

const renderPagination = pagination => {
  const {currentPage, pageCount} = pagination;
  const options = Array.from(
    {'length': pageCount},
    (value, index) => `<option value="${index + 1}">${index + 1}</option>`
  ).join('');

  selectPage.innerHTML = options;
  selectPage.selectedIndex = currentPage - 1;
};


/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderIndicators = pagination => {
  const {count} = pagination;

  spanNbProducts.innerHTML = count;
};

/**
 * Render brands selector
 * @param  {Object} products
 */
const renderBrands = async () => {

  //take the list of all brands
  const products = await fetchProducts(1, 150);
  const listBrand = Array.from(new Set(products.result.map(product => {return product.brand;})))

  let options = `<option value=${undefined}>undefined</option>`;
  for(let i= 0; i<listBrand.length; i++){
    options += `<option value="${listBrand[i]}">${listBrand[i]}</option>`
  }

  selectBrands.innerHTML = options;
  selectBrands.selectedIndex = listBrand.indexOf(currentBrand) + 1;
};


const render = (products, pagination) => {
  renderProducts(products);
  renderPagination(pagination);
  renderIndicators(pagination);
  renderBrands();
};

/**
 * Declaration of all Listeners
 */

/**
 * Select the number of products to display
 */
selectShow.addEventListener('change', async (event) => {
  const products = await fetchProducts(currentPagination.currentPage, parseInt(event.target.value), currentBrand);


  setCurrentProducts(products);
  render(currentProducts, currentPagination);
});

selectPage.addEventListener('change', async (event) => {
  const products = await fetchProducts(parseInt(event.target.value), selectShow.value, currentBrand);

  setCurrentProducts(products);
  render(currentProducts, currentPagination);
});


selectBrands.addEventListener('change', async (event) => {

  const brand = event.target.value
  console.log(brand)

  const products = await fetchProducts(selectPage.Show, selectShow.value, brand);

  setCurrentProducts(products);
  render(currentProducts, currentPagination);
});

document.addEventListener('DOMContentLoaded', async () => {
  const products = await fetchProducts();

  setCurrentProducts(products);
  render(currentProducts, currentPagination);
});
