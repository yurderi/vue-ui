<template>
    <transition name="modal">
        <div class="modal-container">
            <div class="modal" :style="{ width, height }">
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
        }
    }
}
</script>