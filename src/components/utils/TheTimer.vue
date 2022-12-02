<template>
  <div class="timer--container">
    <div>
      <p v-if="time == 0" @click="reTime">resend the code</p>
    </div>
    <div>
      <p>{{ sec }} : {{ min }}</p>
      <!-- <div>{{time}}</div> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(_ , emit) {
        let min = ref(0)
        let sec = ref(0)
        let time = ref(180)
        let timer = ref(null)
        let timerStarted = ref(true)

        let countdown = () => {
            time.value--
            min.value = String(Math.trunc(time.value / 60)).padStart(2, 0)
            sec.value = String(Math.trunc(time.value % 60)).padStart(2, 0)
            if (time.value == 0) {
                clearInterval(timer.value)
                timerStarted.value = false
                emit('timeout', time.value)
            }
        }

        timer.value = setInterval(countdown, 1000)

        let reTime = () => {
            clearInterval(timer.value)
            time.value = 10
            timer.value = setInterval(countdown, 1000)
        }

        // let OTPTimeout = computed(() => {
        //   return store.state.Auth.timerLeft;
        // });

        return {
            min,
            sec,
            time,
            timer,
            reTime,
            countdown,
            timerStarted,
        }
    },
}
</script>

<style scoped>
.timer--container {
  /* display: flex; */
  justify-content: space-between;
}
.timer--container div p {
  margin-top: 1.6rem;
}
</style>
