export default {
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