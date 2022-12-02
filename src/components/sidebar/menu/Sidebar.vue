<template>
  
  <div class="sidebar">
    <div
    class="sidebar__backdrop"
    @click="closeSidebarPanel"
    v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar__panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import PageLayout from "layout/PageLayout.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: { PageLayout },
  setup() {
    let store = useStore();
    let closeSidebarPanel = () => {
      store.commit("toggleNav");
    };
    let isPanelOpen = computed(() => {
      return store.state.Sidebar.isNavOpen;
    });
    return { closeSidebarPanel, isPanelOpen };
  },
};
</script>
<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%) !important;
  transition: all 200ms ease-out 0s;
}
.sidebar {
  &__backdrop {
    background-color: rgba(19, 15, 64, 0.4);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  &__panel {
    overflow-y: auto;
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 1;
    height: 100vh;
    padding-top: 6rem;
    
    // padding:  0 2rem;
    text-align: left;
    width: 30rem;
  }
}
</style>
