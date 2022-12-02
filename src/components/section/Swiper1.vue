<template>
  <swiper
    :dir="dir"
    slidesPerView="6"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '320': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      '480': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(x, i) in 9" :key="i">
      <!-- <product-card></product-card> -->

      <article-card />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import ProductCard from "@/components/section/ProductCard";
import ArticleCard from "@/components/section/ArticleCard";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { computed } from "@vue/runtime-core";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductCard,
    ArticleCard,
  },
  setup(props) {
    let dir = computed(() => {
      return localStorage.getItem("dir");
    });

    return {
      modules: [Pagination],
      ProductCard,
      ArticleCard,
      dir,
    };
  },
};
</script>

<style>
/* custom styling */
.swiper-pagination {
  display: none;
}

.swiper-wrapper {
  /* transform: translate3d(0px, 0px, 0px) !important; */
}
</style>
