const path = require('path')

const loadModules = (Vue) => {
    Vue.component('v-file', require('./modules/FileInput.vue').default)
    Vue.component('v-checkbox', require('./modules/Checkbox.vue').default)
    Vue.component('v-info', require('./modules/Info.vue').default)
    Vue.component('v-modal', require('./modules/Modal.vue').default)
    Vue.component('v-progress', require('./modules/Progressbar.vue').default)
    Vue.component('fa', require('@fortawesome/vue-fontawesome').default)
    Vue.component('v-button', require('./modules/Button.vue').default)
    
    require('@fortawesome/fontawesome-free-brands')
    require('@fortawesome/fontawesome-free-solid')
    require('@fortawesome/fontawesome-free-regular')
}

export default {
    install(Vue, options) {
        loadModules(Vue)
    }
}