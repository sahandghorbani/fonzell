<template>
  <p>{{ time }}</p>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        let time = ref(0)
        let store = useStore()
        let otpTimer = computed(() => {
            time.value = store.state.Auth.timerLeft
            return store.state.Auth.timerLeft
        })
        let countdown = () => {
            time.value--
            if (time.value == 0) clearInterval(time.value)
        }

        time.value = setInterval(countdown, 1000)

        return { time }
    },
}
</script>

<style></style>
