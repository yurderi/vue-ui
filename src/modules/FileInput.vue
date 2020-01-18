<template>
    <div class="file-input row flex">
        <input :value="value" type="text" class="flex" :id="id" @input="input" :disabled="disabled">
        
        <button @click.prevent="openFileSelect" :disabled="disabled" type="button">...</button>
        
        <input type="file" :webkitdirectory="type === 'directory'" ref="fileInput" @change="onPathSelected"/>
    </div>
</template>

<script>
export default {
    name: 'v-file-input',
    description: 'An extended custom-style file input',
    props: {
        id: {
            type: String,
            description: 'The id of the input for associated labels',
            required: false
        },
        type: {
            type: String,
            description: 'The type of the input. Can be "directory" or "file (default)"',
            required: false
        },
        value: {
            type: String,
            description: 'The associated field value',
            required: true
        },
        disabled: {
            type: Boolean,
            description: 'Whether the input is disabled or not',
            required: false
        }
    },
    methods: {
        onPathSelected(e) {
            let me = this
            let path = e.target.files.length === 1
                ? (e.target.files[0].path || e.target.files[0].name)
                : ''
    
            me.$emit('input', path)
        },
        input(e) {
            let me = this
            
            me.$emit('input', e.target.value)
        },
        openFileSelect () {
            let me = this
            
            me.$refs.fileInput.click()
        }
    }
}
</script>