<template>
    <div class="form-input">
        <input :type="type" :value="value" :required="required" :placeholder="placeholder"
               :readonly="readonly" :disabled="disabled" :id="id" :name="name"
                ref="input" @input="change" @change="change">
        
        <v-validation :validation="validation"></v-validation>
    </div>
</template>

<script>
import ValidationMixin from '../mixins/Validation'

export default {
    mixins: [ValidationMixin],
    name: 'v-input',
    description: 'A configure input field.',
    props: {
        type: {
            type: String,
            description: 'The input type. Can be: text, email, password, date',
            required: false
        },
        value: {
            type: String,
            description: 'The associated value',
            required: false
        },
        required: {
            type: Boolean,
            description: 'Whether the value is required or not. Not affected by validation.',
            required: false
        },
        readonly: {
            type: Boolean,
            description: 'Whether the input is read-only or not. Works only for raw input fields.',
            required: false
        },
        disabled: {
            type: Boolean,
            description: 'Whether the input is disabled or not.',
            required: false
        },
        id: {
            type: String,
            description: 'The id of the input for associated labels.',
            required: false
        },
        name: {
            type: String,
            description: 'The name of the input.',
            required: false
        },
        placeholder: {
            type: String,
            description: 'A optional placeholder for the input.',
            required: false
        }
    },
    methods: {
        change() {
            let me = this
            let value = me.$refs.input.value
        
            me.$emit('input', value)
        },
        focus() {
            let me = this
            
            me.$refs.input.focus()
        }
    }
}
</script>