<template>
    <div class="form-input">
        <input :type="type" :value="value" :required="required" :placeholder="placeholder"
               :readonly="readonly" :disabled="disabled" :id="id" :name="name"
                ref="input" @input="change" @change="change">
        
        <div class="validation-icon" v-if="validation.ok !== null">
            <fa icon="check-circle" v-if="validation.ok === true && validation.spin === false" class="ok"></fa>
            <fa icon="exclamation-circle" v-if="validation.ok === false && validation.spin === false" class="fail"></fa>
            <fa icon="spinner" v-if="validation.spin === true" class="spin" spin></fa>
        </div>

        <div class="validation-message" v-if="validation.ok === false">
            <span>{{ validation.message }}</span>
        </div>
    </div>
</template>

<script>
export default {
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
    events: {
        validate: {
            description: 'A callback for optional validation'
        }
    },
    data: () => ({
        validation: {
            ok: null,
            message: '',
            spin: false
        },
        validateTimeout: null
    }),
    watch: {
        value(newVal, oldVal) {
            let me = this
            
            if (newVal !== oldVal) {
                let timeout = 250
                
                clearTimeout(me.validateTimeout)
                
                me.validateTimeout = setTimeout(() => {
                    me.validate()
                        .then(() => {})
                        .catch(() => {})
                }, timeout)
            }
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
        },
        validate() {
            let me = this
        
            return new Promise((resolve, reject) => {
                me.$emit('validate', {
                    ok() {
                        me.validation.ok = true
                        me.validation.spin = false
                    
                        resolve()
                    },
                    fail(message) {
                        me.validation.ok = false
                        me.validation.spin = false
                        me.validation.message = message
                    
                        reject(message)
                    },
                    clear() {
                        me.validation.ok = null
                        me.validation.spin = false
                        me.validation.message = ''
                    },
                    spin() {
                        me.validation.spin = true
                    }
                })
            })
        },
        isValid () {
            let me = this
        
            return new Promise((resolve, reject) => {
                if (me.validation.ok === true) {
                    resolve()
                } else if (me.validation.ok === false) {
                    reject(me.validation.message)
                } else {
                    me.validate()
                        .then(resolve)
                        .catch(reject)
                }
            })
        }
    }
}
</script>