<template>
    <div class="file-input row flex" :title="hasError ? this.validation.message : null">
        <input :value="value" type="text" class="flex" :id="id" @input="input" :disabled="disabled"
            :class="{ error: hasError }">
        
        <button @click="$refs.folderInput.click()" :disabled="disabled">...</button>
        
        <input type="file" :webkitdirectory="type === 'directory'" ref="folderInput" />
        
        <div class="error-container" v-if="hasError">
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-file-input',
    props: [
        'id',
        'value',
        'type',
        'disabled',
        'validation'
    ],
    mounted()
    {
        let me = this
        
        me.$refs.folderInput.addEventListener('change', me.onPathSelected)
    },
    computed: {
        hasError() {
            return this.validation && this.validation.valid === false
        }
    },
    methods: {
        onPathSelected(e)
        {
            let me = this
            let path = e.target.files.length === 1 ? e.target.files[0].path : ''
            
            me.$emit('input', path)
        },
        input(e)
        {
            let me = this
            
            me.$emit('input', e.target.value)
        }
    }
}
</script>