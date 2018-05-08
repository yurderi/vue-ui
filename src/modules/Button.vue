<template>
    <button :disabled="isDisabled || isSpinning"
        :class="{ 'has--icon': isSpinning }">
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
    props: [
        'disabled',
        'spin',
        'progress'
    ],
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