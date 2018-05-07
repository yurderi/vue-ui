const path = require('path')

const loadModules = (Vue) => {
    Vue.component('v-file-input', require('./modules/FileInput.vue').default)
    Vue.component('v-checkbox', require('./modules/Checkbox.vue').default)
    Vue.component('v-info', require('./modules/Info.vue').default)
    Vue.component('v-modal', require('./modules/Modal.vue').default)
    Vue.component('v-progress', require('./modules/Progressbar.vue').default)
}

export default {
    install(Vue, options) {
        loadModules(Vue)
    }
}