import axios from "axios";
import api from "./../../../boot/api.js";

export async function registerUser({ commit }, payload) {
  try {
    commit("SET_ERR_MESSAGE", null);
    commit("LOADING", true);
    let emailPhone = payload;
    let res = await api.post("v1/auth/request", {
      userLogin: emailPhone,
    });
    let verifyUrl = res.data.verifyUrl;
    commit("LOADING", false);
    commit("SET_USER", res.data.userLogin);
    if (res.data.success == false) {
      commit("SET_ERR_MESSAGE", res.data.message);
    } else {
      commit("CODE_ARRIVED", true);
      commit("SET_USER_MESSAGE", res.data.message);
    }
    if (res.data.param === "code") {
      commit("SET_TIMER", res.data.resendSeconds);
      commit("REGISTER_BY_OTP", { otp: true, verifyUrl });
    }
    if (res.data.param === "password") {
      commit("REGISTER_BY_password", { password: true, verifyUrl });
    }
  } catch (err) {
    commit("SET_ERR_MESSAGE", err.message);
    commit("LOADING", false);
  }
}

export async function passAuthentication({ commit, state }, payload) {
  try {
    commit("SET_ERR_MESSAGE", null);
    commit("LOADING", true);
    let verifyUrl = state.verifyUrl;
    let params;
    if (state.modeIsOTP) params = { code: payload, userLogin: state.username };
    if (state.modeIsPassword)
      params = { password: payload, userLogin: state.username };
    let res = await axios.post(verifyUrl, params);
    if (res.data.success == false) commit("SET_ERR_MESSAGE", res.data.message);
    else {
      commit("SET_TOKEN", res.data.user.api.token);
      commit("SET_EXPIRATION", res.data.user.api.expiredAt);
    }
    commit("LOADING", false);
  } catch (err) {
    commit("SET_ERR_MESSAGE", err.message);
    commit("LOADING", false);
  }
}
// export async function tryLogin({ commit, dispatch }) {
//   try {
//     const token = localStorage.getItem("token");
//     const tokenExpiration = localStorage.getItem("tokenExpiration");
//     const username = localStorage.getItem("username");

//     // how much time is left till expiring
//     const expiresIn = +tokenExpiration - +Math.floor(Date.now() / 1100);

//     // if timer expired, dont login
//     if (expiresIn < 10000) return;

//     setTimeout(() => {
//       dispatch("autoLogout");
//     }, expiresIn);

//     if (token) {
//       // login user automatically
//       commit("SET_TOKEN", token);
//       commit("SET_USER", username);
//       dispatch("userAuth/register_user", null, { root: true });
//     } else commit('SET_ERR_MESSAGE' , 'you are not loged in ');
//   } catch (error) {
//     console.log(error);
//   }
// }
// export async function logout({ commit }) {
//   localStorage.removeItem("token");
//   localStorage.removeItem("tokenExpiration");

//   // these two are seperated because the process of fetching theme have nothing to do ;
//   commit('userAuth/RESET_USER', null, { root: true })
//   commit('userAuth/FETCH_USER_IMG', null, { root: true })
  
// }
// export async function autoLogout({ dispatch }) {
//   dispatch("logout");
// }

/*     .catch((err) => {
      // console.error(err.response.status);
      // console.error(err.response.data);
      // console.error(err.response.headers);
      // console.log(err.response.data.message.includes('password'));
      if (err.response.data.message.includes("password")) {
        context.rootState.auth.passRegErr = err.response.data.message;
      }
      if (err.response.data.message.includes("email")) {
        context.rootState.auth.emailRegErr = err.response.data.message;
      }
    }); */
