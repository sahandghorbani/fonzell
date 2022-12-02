// export default {
//   products(state) {
//     return state.productList;
//   },
//   product(state) {
//     return state.product;
//   },
// };


export default function product (state) {
    return state.product;
}


export  function shouldUpdate (state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    // True if more than a minute ago
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  
}
