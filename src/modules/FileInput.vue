<template>
    <div class="file-input row flex">
        <input :value="value" type="text" class="flex" :id="id" @input="input" :disabled="disabled">
        
        <button @click="$refs.fileInput.click()" :disabled="disabled">...</button>
        
        <input type="file" :webkitdirectory="type === 'directory'" ref="fileInput" @change="onPathSelected"/>
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
    ],
    methods: {
        onPathSelected(e) {
            let me = this
            let path = e.target.files.length === 1
                ? e.target.files[0].name
                : ''
    
            console.log(e.target.files[ 0 ])
    
            me.$emit('input', path)
        },
        input(e) {
            let me = this
            
            me.$emit('input', e.target.value)
        }
    }
}
</script>