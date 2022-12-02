export function UPDATE_SKIN(state, skin) {
  state.skin = skin;
  // Update value in localStorage
  localStorage.setItem("skin", skin);

  // Update DOM for dark-layout
  if (skin === "dark") document.body.classList.add("dark-layout");
  else if (document.body.className.match("dark-layout"))
    document.body.classList.remove("dark-layout");
}


export function UPDATE_DIR(state, dir) {
  state.dir = dir;
}
