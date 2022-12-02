<template>
  <body>
    <section>
      <svg
      v-if="mode =='dark' "
      @click="darkHandler"
      class="1"
        id="darkmode"
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="sun"
          d="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"
          fill="#FBC539"
        />
      </svg>
      <svg
      v-else
      @click="darkHandler"
        id="lightmode"
        class="2"
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="moon"
          d="M15.1881 29.3293C19.4644 43.9027 35.2643 51.5767 35.6866 53.016C21.1133 57.2923 5.83258 48.9449 1.5563 34.3715C-2.71998 19.7981 5.62748 4.5174 20.2009 0.241121C20.2009 0.241121 10.9118 14.7559 15.1881 29.3293Z"
          fill="#FBC539"
        />
      </svg>
    </section>
  </body>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  setup() {
    let toggle = ref(false);
    const moonPath =
      "M15.1881 29.3293C19.4644 43.9027 35.2643 51.5767 35.6866 53.016C21.1133 57.2923 5.83258 48.9449 1.5563 34.3715C-2.71998 19.7981 5.62748 4.5174 20.2009 0.241121C20.2009 0.241121 10.9118 14.7559 15.1881 29.3293Z";
    const sunPath =
      "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

      let darkHandler = () => {
        //   anime.js
//   set up timeline
  const timeline = anime.timeline({
    duration : 700,
    easing : "easeOutExpo"    
  });
//   Add different animation to timeline
  if (mode.value == 'dark') {
    timeline.add({
      targets :  ".sun",
      d: [{value: toggle.value? sunPath : moonPath}]
    })
    .add({
      targets : "#darkmode",
      rotate : toggle.value ? 540 : 360
    }, 
  //    Speed
    '-= 350')
    .add({
      targets: 'section',
    }, '-=600')

  }else {
    timeline.add({
      targets :  ".moon",
      d: [{value: toggle.value? moonPath : sunPath}]
    })
    .add({
      targets : "#lightmode",
      rotate : toggle.value ? 360 : 540
    }, 
  //    Speed
    '-= 350')
    .add({
      targets: 'section',
    }, '-=600')
  }

//   everytime I click sun :: toggle == true;
  if(!toggle.value){
    toggle.value = true;
  }else{
    toggle.value = false;
  }
      }

      let mode = computed(() => {
        return localStorage.getItem("skin") == "dark" ? "light" : "dark"
      })

    return {darkHandler , mode};
  },



};
</script>

<style></style>
