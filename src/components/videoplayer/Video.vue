<template>
  <div class="demo">
    <div class="video">
      <vue-plyr-video />
    </div>
  </div>
</template>

<script>
import VuePlyrVideo from './VuePlyrVideo.vue'

export default {
    components: {
        VuePlyrVideo,
    },
}
</script>

<style lang="scss" scoped>
.video {
  width: 90%;
  margin: 0 auto;
  // border-radius: 45px;
}

</style>
>
