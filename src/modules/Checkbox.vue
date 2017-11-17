<template>
    <div class="checkbox flex">
        <label :for="name" v-if="label">{{ label }}</label>
        
        <div class="container" @click="update(!value)" :class="{ active: value }">
            <span v-if="value">{{opts.trueLabel}}</span>
            <span v-else>{{opts.falseLabel}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'checkbox',
    props: [
        'name',
        'label',
        'value',
        'settings'
    ],
    mounted()
    {
        this.opts = Object.assign({}, this.opts, this.settings)
    },
    data: () => ({
        opts: {
            trueLabel: 'On',
            falseLabel: 'Off'
        }
    }),
    methods: {
        update(value) {
            this.$emit('input', value)
        }
    }
}
</script>