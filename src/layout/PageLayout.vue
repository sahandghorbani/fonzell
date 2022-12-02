<template>
  <div class="container w-90">
    <slot default></slot>
  </div>
  <div class="container w-80">
    <slot name="w-80"></slot>
  </div>
  <div class="container w-70">
    <slot name="w-70"></slot>
  </div>
  <div class="container w-60">
    <slot name="w-60"></slot>
  </div>
  <div class="container w-100">
    <slot name="w-100"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto !important;
  max-width: 1320px;
}

.w {
  &-90 {
    width: 90% !important;
  }
  &-80 {
    width: 80% !important;
  }
  &-70 {
    width: 70% !important;
  }
  &-60 {
    width: 60% !important;
  }
  &-100 {
    width: 100% !important;
  }
}
</style>
