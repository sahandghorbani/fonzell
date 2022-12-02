// these two are fetching from same API
export function FETCH_INPUTS(state, payload) {
  state.profileUpdaterInputs = payload;
}
// these two are fetching from same API
export function FETCH_USER(state, payload) {
  //this is the main object when we register
  state.user.push(payload);
  if (state.user.length > 1) state.user.length = 1;
}

export function SET_LOADING(state, payload) {
  state.loading = payload;
}
// WHEN WE LOG OUT  , this mutation should set to null
export function RESET_USER(state, payload) {
  //resrting the user object by logging-out
  state.user = [];
}
// WHEN WE LOG OUT  , this mutation should set to null
export function FETCH_USER_IMG(state, payload) {
  state.userImgPath = payload;
}
