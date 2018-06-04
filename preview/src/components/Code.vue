<template>
    <div class="code-container">
        <ul class="line-numbers">
            <li v-for="i in allowedLines">{{ i }}</li>
        </ul>
        <div class="code" v-highlightjs="allowedCode">
            <code :class="language"></code>
        </div>
        <div class="language" v-if="language">
            {{ language }}
        </div>
        <div class="show-more" v-if="allowedLines < lineNumbers" @click="allowedLines = lineNumbers">
            Show all
        </div>
        <div class="fade-out" v-if="allowedLines < lineNumbers"></div>
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
        },
        allowedCode() {
            return this.formattedCode
                .split('\n')
                .splice(0, this.allowedLines)
                .join('\n')
        },
    },
    data: () => ({
        code: '',
        allowedLines: 1
    }),
    mounted() {
        let me = this
    
        me.code = me.$slots.default[ 1 ].text
        me.allowedLines = me.lineNumbers > 10 ? 10 : me.lineNumbers
    }
}
</script>