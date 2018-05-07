// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import RhinosUI from '../../src/index'
import '../../src/assets/less/all.less'
import './assets/component.less'

Vue.use(RhinosUI)

import VCode from '@/components/Code'
Vue.component('v-code', VCode)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
