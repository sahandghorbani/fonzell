export function REGISTER_USER(state, payload) {
  state.user = payload;
}

export function REGISTER_BY_OTP(state, payload) {
  state.modeIsOTP = payload.otp;
  state.verifyUrl = payload.verifyUrl;
}

export function CODE_ARRIVED(state, payload) {
  state.codeArrived = payload;
}

export function LOADING(state, payload) {
  state.loading = payload;
}

export function SET_USER(state, payload) {
  state.username = payload;
}

export function REGISTER_BY_password(state, payload) {
  state.modeIsPassword = payload.password;
  state.verifyUrl = payload.verifyUrl;
}

export function SET_ERR_MESSAGE(state, payload) {
  state.errorMessage = payload;
}

export function SET_USER_MESSAGE(state, payload) {
  state.userMessage = payload;
}

export function SET_TIMER(state, payload) {
  state.timerLeft = payload;
}

export function SET_TOKEN(state, token) {
  state.token = token;
  localStorage.setItem("token", token);
}

export function SET_EXPIRATION(state, expiredAt) {
  localStorage.setItem("tokenExpiration", expiredAt);
}

//beforeOnMounting of register form
export function RESET_FORM(state) {
  // console.log("form reseted");
  state.codeArrived = false;
  (state.modeIsOTP = false),
    (state.modeIsPassword = false),
    (state.timerLeft = 0),
    (state.userMessage = null),
    (state.verifyUrl = null),
    (state.loading = false),
    (state.token = null),
    (state.username = null);
}
