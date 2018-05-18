<template>
    <transition name="modal">
        <div class="modal-container">
            <div class="modal">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'v-modal',
    description: 'A simple configurable modal.'
}
</script>