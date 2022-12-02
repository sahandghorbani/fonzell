import { defineAsyncComponent, markRaw } from 'vue'
export const image_1_comp = markRaw(
    defineAsyncComponent(() => import('@/components/images/Image1.vue'))
)
export const image_2_comp = markRaw(
    defineAsyncComponent(() => import('@/components/images/Images2.vue'))
)
export const image_3_comp = markRaw(
    defineAsyncComponent(() => import('@/components/images/Images3.vue'))
)
export const image_4_comp = markRaw(
    defineAsyncComponent(() => import('@/components/images/Images4.vue'))
)
