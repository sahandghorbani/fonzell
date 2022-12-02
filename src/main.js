import { createApp } from 'vue'

import { createI18n } from 'vue-i18n'

import App from './App.vue'

import router from './router'

import store from './store'

import Toast from 'vue-toastification'

import { i18n } from './i18n.js'


import './assets/scss/utility-classes/main.scss'
// import './assets/scss/bem/main.scss'



createApp(App).use(router).use(store).use(Toast).use(i18n).mount('#app')

