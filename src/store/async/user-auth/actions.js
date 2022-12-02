import axios from "axios";
import api from "../../../boot/api.js";

export async function register_user({ commit }, payload) {
  //register the complete user data ;
  try {
    let res = await api.get("v1/profile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(res);
    commit("FETCH_INPUTS", res.data.inputs[0].inputs);
    commit("FETCH_USER", res.data.user);
  } catch (err) {
    console.log(err);
  }
}

export async function user_update({ commit }, payload) {
  try {
    let res = await api.put("v1/profile/update", payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  } catch (err) {}
}

export async function profie_uploader({ commit }, payload) {
  //uploading the user-profile to server
  try {
    commit("SET_LOADING", true);
    let res = await api.post("v1/upload", payload, {
      headers: {
        contentType: "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    //because trhe process of profile upodating is diffrent with other user data updatings ....
    await commit("FETCH_USER_IMG", res.data.path);
    commit("SET_LOADING", false);
  } catch (err) {
    console.log(err.response);
    commit("SET_LOADING", false);
  }
}


export async function tryLogin({ commit, dispatch }) {
  try {
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const username = localStorage.getItem("username");

    // how much time is left till expiring
    const expiresIn = +tokenExpiration - +Math.floor(Date.now() / 1100);

    // if timer expired, dont login
    if (expiresIn < 10000) return;

    setTimeout(() => {
      dispatch("autoLogout");
    }, expiresIn);

    if (token) {
      // login user automatically
      commit("userReg/SET_TOKEN", token , {root:true});
      commit("userReg/SET_USER", username ,{root:true});
      dispatch("register_user");
    } else commit('userReg//SET_ERR_MESSAGE' , 'you are not loged in ');
  } catch (error) {
    console.log(error);
  }
}
export async function logout({ commit }) {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiration");

  // these two are seperated because the process of fetching theme have nothing to do ;
  commit('RESET_USER', null)
  commit('FETCH_USER_IMG', null)
  
}
export async function autoLogout({ dispatch }) {
  dispatch("logout");
}
