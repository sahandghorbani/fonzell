export function FETCH_PRODUCTS(state, payload) {
  state.productList = payload;
}

export function FETCH_SINGLE_PRODUCT(state, payload) {
  state.product.push(payload);
}

export function SET_PRODUCT_NULL(state) {
  state.product = [];
}

export function SET_LOADING(state, payload) {
  state.loading = payload;
}




