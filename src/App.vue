<template>
  <main>
    <router-view />
  </main>
</template>

<script>
// import DarkLightBtn from "@/components/theme/DarkLightBtn.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    let store = useStore();
    const { t, locale } = useI18n();

    onMounted(() => {
      /*
      store.dispatch("userAuth/tryLogin");

      if (localStorage.getItem("lang") == null) {
        localStorage.setItem("lang", "fa");
      }
      locale.value = localStorage.getItem("lang");

      if (localStorage.getItem("dir") == null) {
        localStorage.setItem("dir", "rtl");
      }
      document.body.dir = localStorage.getItem("dir");
      if (store.state.appConfig.skin === "dark")
        document.body.classList.add("dark-layout");
        */
    });

    /*
    let themeHandler = () => {
      store.state.appConfig.skin = !store.state.appConfig.skin;
      store.commit(
        "appConfig/UPDATE_SKIN",
        localStorage.getItem("skin") == "dark" ? "light" : "dark"
      );
    };
    */

    /*
    let changelang = () => {
      //changing language
      locale.value = localStorage.getItem("lang") == "en" ? "fa" : "en";
      localStorage.setItem(
        "lang",
        localStorage.getItem("lang") == "en" ? "fa" : "en"
      );
      //changing direction
      document.body.dir = localStorage.getItem("dir") == "rtl" ? "ltr" : "rtl";
      localStorage.setItem(
        "dir",
        localStorage.getItem("dir") == "rtl" ? "ltr" : "rtl"
        //updating store
      );
      store.commit(
        "appConfig/UPDATE_DIR",
        localStorage.getItem("dir") == "rtl" ? "rtl" : "ltr"
      );
    };
    */

    // return { themeHandler, changelang };
  },
};
</script>

<style></style>
