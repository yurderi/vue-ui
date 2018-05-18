<template>
    <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: percent + '%' }"></div>
        <div class="progress-bar-text" v-if="text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'v-progressbar',
    description: 'A simple custom-styled progressbar.',
    props: {
        value: {
            type: null,
            description: 'The current progress value.',
            required: true
        },
        max: {
            type: Number,
            description: 'The maximum value. Default is 100',
            required: false,
            default: 100
        },
        text: {
            type: String,
            description: 'An optional text that will be displayed in the middle of the progressbar.',
            required: false
        }
    },
    computed: {
        percent() {
            return this.value / Math.max(1, this.max) * 100;
        }
    }
}
</script>