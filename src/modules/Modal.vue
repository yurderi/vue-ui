<template>
    <transition name="modal">
        <div class="modal-container" @click="tryClose">
            <div class="modal" :style="{ width, height }" @click="doFocus">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'v-modal',
    description: 'A simple configurable modal.',
    props: {
        width: {
            type: Number|String,
            required: false,
            description: 'Defines a fixed width of the modal.',
            default: 'auto'
        },
        height: {
            type: Number|String,
            required: false,
            description: 'Defines a fixed height of the modal.',
            default: 'auto'
        },
        closeEsc: {
            type: Boolean,
            required: false,
            description: 'Closes the modal when "esc" is pressed.',
            default: false
        },
        closeClick: {
            type: Boolean,
            required: false,
            description: 'Closes the modal when clicked somewhere outside of the modal.',
            default: false
        }
    },
    data: () => ({
        preventClose: false
    }),
    mounted() {
        let me = this
        
        document.addEventListener('keydown', me.onKeyDown.bind(me))
    },
    beforeDestroy() {
        let me = this
        
        document.removeEventListener('keydown', me.onKeyDown.bind(me))
    },
    methods: {
        onKeyDown (e) {
            let me = this
            
            if (me.closeEsc && e.keyCode === 27) {
                me.close()
            }
        },
        tryClose() {
            let me = this
            
            if (me.preventClose === true || !me.closeClick) {
                me.preventClose = false
                return
            }
            
            me.close()
        },
        doFocus() {
            let me = this
            
            me.preventClose = true
        },
        close() {
            let me = this
            
            me.$emit('close')
        }
    }
}
</script>