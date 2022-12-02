<template>
  <div class="navbar">
    <div class="navbar__container">
      <!-- 1 -->
      <div>
        <the-sidebar class="navbar__sidebar"></the-sidebar>
      </div>

      <!-- 2 -->
      <div class="navbar__logo">
        <div class="navbar__img">
          <img
            class="navbar__img"
            src="./../../assets/imgs/fonzell.png"
            alt=""
          />
        </div>
      </div>
      <!-- 3 -->
      <div class="navbar__icons">
        <div>
          <mobile-icon></mobile-icon>
          <heart-icon></heart-icon>
          <flag-icon class="navbar__icons--lang"> </flag-icon>
          <user-icon></user-icon>
          <search-icon></search-icon>
          <basket-icon></basket-icon>
        </div>
      </div>
      <!-- 4 -->
      <div class="navbar__menu">
        <div class="navbar__menubar">
          <p>Home</p>
          |
          <p>Shop</p>
          |
          <p>Unterhalt</p>
          |
          <p>Blog</p>
          |
          <p>Kontakt</p>
          |
          <p>Überuns</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageLayout from "layout/PageLayout.vue";
import TheSidebar from "components/sidebar/TheSidebar.vue";
import UserIcon from "../../assets/svg/UserIcon.vue";
import FlagIcon from "../../assets/svg/FlagIcon.vue";
import BasketIcon from "../../assets/svg/BasketIcon.vue";
import SearchIcon from "../../assets/svg/SearchIcon.vue";
import HeartIcon from "../../assets/svg/HeartIcon";
import MobileIcon from "../../assets/svg/MobileIcon";
import { ref } from '@vue/reactivity';

export default {
  components: {
    PageLayout,
    TheSidebar,
    UserIcon,
    FlagIcon,
    BasketIcon,
    SearchIcon,
    HeartIcon,
    MobileIcon
  },

};
</script>

<style scoped lang="scss">
input {
  margin: 0 auto;
  text-align: center;
  border: 1px solid rgb(237, 29, 36);
  border-radius: 0.5rem;
  height: 4rem;
}
.navbar {
  background-color: #fef200;

  &__container {
    // padding-top: 1rem;
    background-color: #fef200;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    row-gap: 1rem;
  }

  &__menu {
    color: red;
    grid-column: 4/6;
    text-align: center;
    margin: auto 0;
    & div > * {
      width: 100%;
      max-width: 80rem;
      text-align: center;
    }
  }

  &__img {
    width: 100px !important;
    grid-column: 3/4;
  }
  &__logo {
    grid-column: 3/4;
    text-align: -webkit-center;
  }

  &__icons {
    margin: 2rem;
    text-align: center;
    grid-column: 4/6;
    & > div {
      display: flex;
      justify-content: end;
      gap: 1rem;
      max-height: 2rem;
    }
    &--lang {
      position: relative;
      &:hover ~ .card {
        display: block;
      }
    }
  }
  &__menubar {
    display: none;
  }
}
@media screen and (min-width: 960px) {
  .navbar {
    background-color: #fef200;

    &__container {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      max-height: 10.5rem;
      max-width: 170rem;
      margin: 0 auto;
    }
    &__logo {
      grid-column: 1/2;
      grid-row: 1/3;
      text-align: -webkit-center;
    }
    &__img {
      width: 15rem !important;
      margin-right: 2rem;
    }
    &__icons {
      grid-column: 5/6;
      grid-row: 1/2;
    }

    &__sidebar {
      display: none;
    }
    &__menubar {
      display: flex;
      justify-content: space-around;
      font-size: 1.8rem;
      max-width: 60rem;
      text-align: center;
      margin: auto;
    }
  }
}


@media only screen and (max-width: 960px) {
  .box:hover input {
    width: 20rem;
    height: 4rem;
  }
}

// 


</style>
