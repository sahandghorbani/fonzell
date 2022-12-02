<template>
  <div class="swiper-con">
    <swiper
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSKadSHklEBOz-w_jhcPBhxrVGKNxZJQNaXnAAv7AEg&s"
          alt=""
        /> </swiper-slide
      ><swiper-slide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBZSJ8EDobaquVrlHmJDnGNkzOCQnaVk12oYIKcUstg&s"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import "./style.css";

// import required modules
import { Pagination, Navigation } from 'swiper'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        }
    },
}
</script>

<style>
.swiper-con {
  width: 90%;
  text-align: center;
  padding: 1.6rem;
  max-width: 90rem;
}
.swiper-slide .swiper-slide-active {
  text-align: center;
}
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 1.2;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 70%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
}
</style>
