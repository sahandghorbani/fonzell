<template>
  <div
    class="toggle"
    :class="{ active: istoggleActive }"
    @click.prevent="toggle"
  >
    <button type="button" class="toggle__button" title="Menu">
      <span class="hidden">Toggle menu</span>
      <span class="toggle__bar toggle__bar--1"></span>
      <span class="toggle__bar toggle__bar--2"></span>
      <span class="toggle__bar toggle__bar--3"></span>
    </button>
  </div>

</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    setup() {
        let store = useStore()

        let toggle = () => {
            store.commit('toggleNav')
        }
        let istoggleActive = computed(() => {
            return store.state.Sidebar.isNavOpen
        })
        return { toggle, istoggleActive }
    },
}
</script>
<style scoped lang="scss">
.toggle {
  &__button {
    margin: 1rem;
    border: 0;
    width: 3.2rem;
    height: 3rem;
    z-index: 2;
    display: block;
    border-radius: 0;
    position: absolute;
    pointer-events: all;
    background-color: transparent;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover .toggle__bar--2 {
      transform: scaleX(1);
    }
  }

  &__bar {
    top: 50%;
    right: .6rem;
    left: .6rem;
    height: 2px;
    width: auto;
    margin-top: -1px;
    position: absolute;
    background-color: #130f40;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    &--1 {
      -webkit-transform: translateY(-.6rem);
      transform: translateY(-.6rem);
    }
    &--2 {
      transform-origin: 100% 50%;
      transform: scaleX(0.8);
    }
    &--3 {
      transform: translateY(.6rem);
    }
  }
}

.no-touchevents .toggle__bar--2:hover {
  transform: scaleX(1);
}

.toggle.active .toggle__button {
  transform: rotate(-180deg);
}

.toggle.active .toggle__bar {
  background-color: #000;
}

.toggle.active .toggle__bar--1 {
  transform: rotate(45deg);
}

.toggle.active .toggle__bar--2 {
  opacity: 0;
}

.toggle.active .toggle__bar--3 {
  transform: rotate(-45deg);
}
.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}
</style>
