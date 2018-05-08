<template>
    <div class="code">{{ formattedCode }}</div>
</template>

<script>
export default {
    name: 'v-code',
    props: [
        'code'
    ],
    computed: {
        formattedCode() {
            return this.code.trim()
        }
    }
}
</script>