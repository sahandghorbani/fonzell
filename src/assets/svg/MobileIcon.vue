<template>
  <div>
    <button @click="toggleMenu" class="menu-toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        height="100px"
        class="w-6 h-6 svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    </button>
    <nav>
      <ul class="menu">
        <li data-text="Home">Home</li>
        <li data-text="Projects">Projects</li>
        <li data-text="About">About</li>
        <li data-text="Contact">Contact</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    let toggleMenu = () => {
      document.body.classList.toggle("open");
      document.querySelector('.svg').classList.toggle('d-none')
    };
    return { toggleMenu };
  },
};
</script>

<style scoped lang="scss">
svg {
  width: 3rem;
  max-height: 3rem;
  color: red;
  display:none;
}

.d-none {
    display: none;
}

@media only screen and (max-width:900px) {
  svg {
    display: block;
  }
}

@import url(https://fonts.googleapis.com/css?family=Lusitana);

$bp-small: 500px;
$bp-arrow: 700px;
$font-primary: "Lusitana", sans-serif;
$color: #98b296;
$color-bg: #fcfcf4;
$color-dark: darken($color, 10%);
$color-lite: lighten($color, 10%);

@mixin position-center {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

body {
  background-color: $color-bg;
  font-family: $font-primary;
}

p {
  font-size: 20px;
  line-height: 28px;
  margin: 0 0 18px;
  span {
    position: relative;
    display: block;
    font-size: 16px;
    line-height: 20px;
    padding: 12px 20px;
    margin-bottom: 24px;
    background-color: white;
    box-shadow: rgba(black, 0.05) 0px 2px 4px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -12px;
      margin: auto;
      background-color: $color;
      width: 24px;
      height: 24px;
      border-radius: 100%;
      box-shadow: rgba(black, 0.1) 0 0 0 3px;
    }
    &:after {
      content: "";
      pointer-events: none;
      position: absolute;
      top: -2px;
      bottom: 0;
      left: -6px;
      margin: auto;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 6px 8px 6px;
      border-color: transparent transparent white transparent;
    }
  }
}

h1 {
  font-size: 40px;
  font-weight: normal;
  line-height: 44px;
  text-align: center;
  margin-bottom: 18px;
  @media (min-width: $bp-small) {
    font-size: 60px;
    line-height: 64px;
  }
}

h3 {
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 60px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    cursor: pointer;
    padding: 6px 20px;
    font-size: 48px;
  }
}

button {
  background-color: transparent;
  position: fixed;
  z-index: 2;
  // top: 24px;
  // left: 24px;
  border: none;
  width: 36px;
  height: 30px;
  outline: none;
  transition: opacity 0.2s ease-out;
  &:before {
    content: "";
    @include position-center;
    right: auto;
    width: 100%;
    transition: opacity 0.2s ease-out, width 0.2s 0.2s ease-out;
  }
  &:after {
    opacity: 0;
    font-weight: 100;
    content: "×";
    color: #303030;
    position: absolute;
    top: 16px;
    left: -4px;
    font-size: 6rem;
    line-height: 0;
    transition: opacity 0.4s ease-out;
  }
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    opacity: 1;
  }
  .open & {
    opacity: 1;
    &:before {
      opacity: 0;
      width: 0;
    }
    &:after {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotate(360deg);
      transition: transform 0.4s 1s ease-out, opacity 0.4s 1s ease-out;
    }
  }
}

nav {
  z-index: 1;
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  overflow: hidden;
  &:before {
    content: "";
    @include position-center;
    background: rgba($color-dark, 0.98);
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
    transform: scale(0.04), translateY(9999px);
    overflow: hidden;
  }
  .open & {
    top: 0;
    &:before {
      animation: menu-animation 0.8s ease-out forwards;
    }
  }
}

ul.menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  perspective: 1000;
  color: white;
  li {
    opacity: 0;
    text-align: center;
    transform: translate3d(0, 36px, 0);
    &:before {
      content: "";
      @include position-center;
      left: auto;
      background-color: white;
      height: 100%;
      width: 0;
      overflow: hidden;
      transition: width 0.14s ease-out;
    }
    &:after {
      opacity: 0;
      content: attr(data-text);
      @include position-center;
      color: $color;
      overflow: hidden;
      transform: translate(-24px, 6px);
      transition: transform 0.1s ease-out, opacity 0.1s ease-out;
    }
    &:hover {
      &:before {
        left: 0;
        right: auto;
        width: 100%;
      }
      &:after {
        opacity: 1;
        padding: 0 20px;
        transform: translate(0px, 6px);
        transition: transform 0.2s 0.14s ease-out, opacity 0.2s 0.14s ease-out;
      }
    }
    .open & {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition: transform 0.2s ease-out, opacity 0.2s ease-out;
      @for $i from 1 to 5 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.1s + 0.65s;
        }
      }
    }
  }
}

article {
  padding: 24px;
  max-width: 600px;
  margin: 60px auto;
  transition: 0.2s ease-out;
  .open & {
    transform: scale(0.92);
    transition: transform 0.2s 0.41s ease-out;
  }
}

@keyframes menu-animation {
  0% {
    opacity: 0;
    transform: scale(0.04) translateY(300%);
  }
  40% {
    transform: scale(0.04) translateY(0);
    transition: ease-out;
  }
  40% {
    transform: scale(0.04) translateY(0);
  }
  60% {
    opacity: 1;
    transform: scale(0.02) translateY(0px);
  }
  61% {
    transform: scale(0.04);
  }
  99.9% {
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
  }
  100% {
    transform: scale(2);
    height: 100%;
    padding-bottom: 0;
    border-radius: 0;
  }
}
</style>
