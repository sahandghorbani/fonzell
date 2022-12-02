<template>
  <svg
    class="arrow"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 43.1 85.9"
    style="enable-background: new 0 0 43.1 85.9"
    xml:space="preserve"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      class="first st0 "
      d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      class="second "
      d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
    />
    <path
      class="third "
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
    />
  </svg>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      const handler = (entries) => {
        entries.forEach((entry) => {
          // console.log(document.getElementsByTagName("path")[1]);
          if (entry.isIntersecting) {
            document.getElementsByTagName("path")[2].classList.add("draw-arrow");
            // document.getElementsByTagName("path")[0].classList.add("draw-arrow");
            document.getElementsByTagName("path")[1].classList.add("draw-arrow");
            // document.getElementsByTagName("path")[2].classList.add("tail-1");
            // document
            //   .getElementsByTagName("path")[0]
            //   .classList.add("draw-arrow");
            // document
            //   .getElementsByTagName("path")[1]
            //   .classList.add("draw-arrow");
            // document
            //   .getElementsByTagName("path")[2]
            //   .classList.add("draw-arrow");
            // document.getElementsByTagName("path")[2].classList.add("tail-2");
          }
        });
      };
      setTimeout(() => {
        const observer = new window.IntersectionObserver(handler, {
          root: null,
          threshold: 0,
        });

        observer.observe(document.querySelector(".arrow"));
      }, 1000);
    });
  },
};
</script>

<style lang="scss" scoped>
svg {
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  .draw-arrow {
    stroke-width: 5;
    stroke: rgb(255, 56, 30);
    fill: none;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    animation-name: draw;
    &.tail-1 {
      animation-delay: 0.5s;
    }
    &.tail-2 {
      animation-delay: 0.5s;
    }
  }
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

// DEMO
body {
  padding: 2rem;
  text-align: center;
  background-color: #222;
}
</style>
>
