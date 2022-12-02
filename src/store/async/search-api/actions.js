import axios from "axios";
import api from "../../../boot/api";

export async function fetch_products({ commit  }, payload ) {
  console.log(Date.now());
  commit('SET_LOADING' , true)
  let res = await api.get("v1/search/products", {
    params: {
      paginate: 30,
      q:payload.q  ,
      page:payload.page
    },
  });
  let productList = [...res.data.data.data];
  console.log(productList);
  commit("FETCH_PRODUCTS", productList);
  commit('SET_LOADING' , false)
}

export async function fetch_single_product({ commit }, payload) {
  let slug = payload;
  let res = await api.get(`v1/search/products/${slug}`);
  let product = res.data.data;

  commit("FETCH_SINGLE_PRODUCT", product);
}
