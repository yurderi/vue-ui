<template>
    <div class="code-container">
        <ul class="line-numbers">
            <li v-for="i in lineNumbers">{{ i }}</li>
        </ul>
        <div class="code" v-highlightjs="formattedCode">
            <code :class="language"></code>
        </div>
        <div class="language" v-if="language">
            {{ language }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-code',
    props: [
        'language'
    ],
    computed: {
        formattedCode() {
            return this.code.trim()
        },
        lineNumbers() {
            return this.formattedCode.split('\n').length
        }
    },
    data: () => ({
        code: ''
    }),
    mounted() {
        let me = this
    
        me.code = me.$slots.default[ 1 ].text
    }
}
</script>