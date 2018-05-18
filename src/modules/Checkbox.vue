<template>
    <div class="checkbox flex" @click="update(!value)">
        <div class="container" :class="{ active: value }">
            <fa :icon="['far', 'check-square']" v-if="value"></fa>
            <fa :icon="['far', 'square']" v-else></fa>
        </div>
        
        <label :for="name" v-if="label" v-html="label"></label>
    </div>
</template>

<script>
export default {
    name: 'checkbox',
    description: 'A simple user-styled checkbox.',
    props: {
        name: {
            type: String,
            description: 'The name of the input',
            required: false
        },
        label: {
            type: String,
            description: 'The label for the checkbox',
            required: true
        },
        value: {
            type: Boolean,
            description: 'The assigned value for the checkbox.',
            required: true
        }
    },
    methods: {
        update(value) {
            this.$emit('input', value)
        }
    }
}
</script>