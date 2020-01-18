<template>
    <button :disabled="isDisabled || isSpinning"
        :class="{ 'has--icon': isSpinning }"
        @click="$emit('click')">
        <fa icon="sync-alt" spin v-if="isSpinning"></fa>
        <span class="text">
            <slot></slot>
        </span>
        <span class="progress" v-if="progress > 0" :style="{ width: progress + '%' }"></span>
    </button>
</template>

<script>
export default {
    name: 'v-button',
    description: 'A simple button with some configurable features.',
    props: {
        disabled: Boolean,
        spin: Boolean,
        progress: {
            type: Number|String,
            description: 'Progress in percent',
            required: false
        }
    },
    availableEvents: {
        click: {
            description: 'Fires when the button is clicked.'
        }
    },
    computed: {
        isDisabled() {
            return this.disabled === '' || this.disabled === true
        },
        isSpinning() {
            return this.spin === '' || this.spin === true
        }
    }
}
</script>