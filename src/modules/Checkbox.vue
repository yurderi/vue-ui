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
    props: [
        'name',
        'label',
        'value'
    ],
    methods: {
        update(value) {
            this.$emit('input', value)
        }
    }
}
</script>