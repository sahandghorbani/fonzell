<template>
  <div class="skeleton">
    <div class="" v-for="x in 20">
      <div class="skeleton__isloading">
        <div class="skeleton__image"></div>
        <div class="skeleton__content">
          <div class="skeleton__text-container">
            <div class="skeleton__main-text"></div>
            <div class="skeleton__sub-text"></div>
          </div>
          <div class="skeleton__btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
body {
  padding: 50px;
}

.skeleton {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 4.8rem;
  text-align: center;
  margin-top: 5rem;
}
.skeleton__isloading {
  height: 252px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
}

.skeleton__isloading .skeleton__image {
  height: 190px;
  background-image: -webkit-linear-gradient(
    left,
    #ffffff 0px,
    #f4f4f4 40px,
    #ececec 80px
  );
  background-image: -o-linear-gradient(
    left,
    #ececec 0px,
    #f4f4f4 40px,
    #ececec 80px
  );
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #f4f4f4 40px,
    #ececec 80px
  );
  background-size: 250px;
  -webkit-animation: shine-skeleton__image 1s infinite ease-out;
  animation: shine-skeleton__image 1s infinite ease-out;
}

.skeleton__isloading .skeleton__content {
  background: #f7f7f7;
  padding: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.skeleton__isloading .skeleton__content .skeleton__text-container {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
}

.skeleton__isloading .skeleton__content .skeleton__main-text {
  height: 10px;
  width: 65%;
  margin-bottom: 10px;
  background: #ececec;
  background-image: -webkit-linear-gradient(
    left,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-image: -o-linear-gradient(
    left,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 250px;
  border-radius: 10px;
  -webkit-animation: shine-skeleton__container-items 1s infinite ease-out;
  animation: shine-skeleton__container-items 1s infinite ease-out;
}

.skeleton__isloading .skeleton__content .skeleton__sub-text {
  height: 10px;
  width: 50%;
  background: #ececec;
  background-image: -webkit-linear-gradient(
    left,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-image: -o-linear-gradient(
    left,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 250px;
  border-radius: 10px;
  -webkit-animation: shine-skeleton__container-items 2s infinite ease-out;
  animation: shine-skeleton__container-items 2s infinite ease-out;
}

.skeleton__isloading .skeleton__content .skeleton__btn {
  width: 60px;
  height: 25px;
  background: #ececec;
  background-image: -webkit-linear-gradient(
    left,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-image: -o-linear-gradient(
    left,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 250px;
  border-radius: 3px;
  -webkit-animation: shine-skeleton__container-items 1s infinite ease-out;
  animation: shine-skeleton__container-items 1s infinite ease-out;
}

@-webkit-keyframes shine-skeleton__image {
  0% {
    background-position: -32px;
  }
  40%,
  100% {
    background-position: 208px;
  }
}

@keyframes shine-skeleton__image {
  0% {
    background-position: -32px;
  }
  40%,
  100% {
    background-position: 208px;
  }
}

@-webkit-keyframes shine-skeleton__container-items {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 140px;
  }
}

@keyframes shine-skeleton__container-items {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 140px;
  }
}

@media screen and (min-width: 680px) {
  .skeleton {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 980px) {
  .skeleton {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 1040px) {
  .skeleton {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
