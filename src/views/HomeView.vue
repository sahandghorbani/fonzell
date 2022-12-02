<template>
  <div>
    <the-navbar></the-navbar>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, defineComponent, onMounted, ref } from "vue";
import PageLayout from "layout/PageLayout.vue";
import TheNavbar from "components/navbar/TheNavbar.vue";

export default defineComponent({
  components: { PageLayout, TheNavbar, AutoSuggest },
  setup() {
    let store = useStore();

    return {};
  },
});
</script>

<style scoped></style>
