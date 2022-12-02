<template>
  <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
    />
  </svg> -->

  <div class="dropdown">
    <button type="button" class="dropdown-label">
      <svg
      height="100px"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
        />
      </svg>
    </button>
    <div class="dropdown-items">
      <a href="#" class="dropdown-item">À Propos</a>
      <a href="#" class="dropdown-item">Blog</a>
      <a href="#" class="dropdown-item">Contact</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
svg {
  max-width: 3rem;
  max-height: 3rem;
  color: red;
  display:none
}

body {
  color: #fff;
  background-color: #1d3557;

  display: grid;
  place-items: center;

  width: 100%;
  height: 100vh;
}
.dropdown {
  font-family: Arial, sans-serif;

  position: relative;
  display: inline;
}

.dropdown-label {
  background-color: transparent;
  border: none;
  text-decoration: none;

  font-size: 2em;
  line-height: 1;

  margin: 0;
  padding-bottom: 0.5rem;

  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
}
.dropdown-items {
  position: absolute;

  opacity: 0;
  background-color: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  width: 200px;
  margin-top: 0.5rem;
  transform: scale(0);
  transform-origin: top right;
  transition: all 0.2s ease-in-out;
  bottom: -5.7rem;
  right: 2rem;
  overflow: hidden;
}
.dropdown-item {
  text-decoration: none;
  color: #000;

  display: block;

  font-size: 0.5em;
  text-align: left;

  padding: 0.7rem;

  transition: background-color 0.2s ease-in-out;
}
.dropdown:focus-within .dropdown-items,
.dropdown:hover .dropdown-items {
  opacity: 1;
  transform: scale(1);
}
.dropdown-label:focus-visible {
  text-decoration: underline;
}
.dropdown-label:focus-visible,
.dropdown-item:focus-visible {
  outline: none;
}
.dropdown-item:hover {
  background-color: #f1faee;
}
.dropdown-item:focus-visible {
  background-color: #f1faee;
}

@media only screen and (min-width:900px) {
  svg {
    display: block;
  }
}


</style>
