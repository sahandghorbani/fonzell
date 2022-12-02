import { createStore } from "vuex";
import userReg from "./async/user-register/index";
import userAuth from './async/user-auth/index'
import Images from "./async/component-builder/index";
import Sidebar from "./sync/sidebar/index";
import productSearch from './async/search-api/index' ;
import appConfig from './sync/app-config/index'

export default createStore({
  modules: {
    userReg,
    Images ,
    Sidebar,
    appConfig,
    productSearch,
    userAuth
  },
});
