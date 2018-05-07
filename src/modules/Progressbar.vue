<template>
    <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: percent + '%' }"></div>
        <div class="progress-bar-text" v-if="text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    props: [
        /**
         * The current progress value
         */
        'value',
        /**
         * The maximum value. Default is 100
         */
        'max',
        /**
         * The text which should be displayed
         */
        'text'
    ],
    computed: {
        percent() {
            return this.value / Math.max(1, this.max || 100) * 100;
        }
    }
}
</script>