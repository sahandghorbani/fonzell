import { defineAsyncComponent, markRaw } from 'vue'

export const Slider1 = markRaw(
    defineAsyncComponent(() => import('@/components/section/Swiper1.vue'))
)
