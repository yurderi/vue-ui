const loadModules = (Vue) => {
    Vue.component('v-file-input', require('src/modules/FileInput.vue').default)
    Vue.component('v-checkbox', require('src/modules/Checkbox.vue').default)
    Vue.component('v-info', require('src/modules/Info.vue').default)
    Vue.component('v-modal', require('src/modules/Modal.vue').default)
    Vue.component('v-progress', require('src/modules/Progressbar.vue').default)
}

const loadLess = () => {
    require('src/assets/less/all.less')
}

export default {
    install(Vue, options) {
        loadModules(Vue)
        loadLess()
    }
}