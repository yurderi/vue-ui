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
    props: [
        /**
         * The type of the input.
         *
         * Can be: text, email, password, number, date, ..
         */
        'type',
        /**
         * The value of the input
         */
        'value',
        /**
         * Whether the input should be required or not.
         */
        'required',
        /**
         * Whether the input is read-only or not.
         */
        'readonly',
        /**
         * Whether the input is disabled or not.
         */
        'disabled',
        /**
         * The id of the input
         */
        'id',
        /**
         * The name of the input
         */
        'name',
        /**
         * The input placeholder
         */
        'placeholder'
    ],
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