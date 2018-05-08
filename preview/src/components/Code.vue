<template>
    <div class="code-container">
        <div class="code">{{ formattedCode }}</div>
        <div class="language" v-if="language">
            {{ language }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-code',
    props: [
        'code',
        'language'
    ],
    computed: {
        formattedCode() {
            return this.code.trim()
        }
    }
}
</script>