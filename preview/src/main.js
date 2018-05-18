// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import RhinosUI from '../../src/index'
import '../../src/assets/less/all.less'
import './assets/component.less'
import './assets/hljs.less'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(RhinosUI)
Vue.use(VueHighlightJS)

import VCode from '@/components/Code'
import VComponent from '@/components/Component'
Vue.component('v-code', VCode)
Vue.component('v-component', VComponent)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
