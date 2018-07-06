<template>
    <div class="form-input">
        <div class="list-container" :class="{ active: isFocus }">
            <div class="list-input">
                <v-input type="text" v-model="currentValue"
                         @focus="isFocus = true" @blur="isFocus = false"
                         placeholder="Press enter to add new item" @keydown.enter="add"
                         @validate="validate"></v-input>
            </div>
            <div class="list-items">
                <div class="list-item row" v-for="(item, key) in value">
                    <span class="item-index">
                        #{{ key + 1 }}
                    </span>
                    <span class="item-value flex">
                        {{ item }}
                    </span>
                    <span class="item-remove" @click="remove(key)">
                        <fa icon="trash"></fa>
                    </span>
                </div>
                <div class="no-items" v-if="!value.length">
                    empty
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-list',
    description: 'A simple multi-select field.',
    props: {
        value: {
            type: Array,
            description: 'The associated value',
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
        unique: {
            type: Boolean,
            description: 'Disallow multiple items with the same value.',
            required: false
        }
    },
    data: () => ({
        currentValue: '',
        isFocus: false
    }),
    methods: {
        add () {
            let me = this
            let values = me.value
            
            if (me.currentValue.length > 0 && (!me.unique || values.indexOf(me.currentValue) === -1)) {
                values.push(me.currentValue)
                
                me.$emit('input', values)
                me.$nextTick(() => me.currentValue = '')
            }
        },
        remove (key) {
            let me = this
            let values = me.value
            
            values.splice(key, 1)
            me.$emit('input', values)
        },
        validate ({ ok, fail, spin, clear}) {
            let me = this
            
            if (me.currentValue.length === 0) {
                fail('The value can not be empty')
            } else if (me.unique && me.value.indexOf(me.currentValue) >= 0) {
                fail('The value already exists in the list')
            } else {
                ok()
            }
        }
    }
}
</script>