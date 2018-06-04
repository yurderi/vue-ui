<template>
    <div class="select" :class="{ focus: isFocus }" @click="focus()">
        <div class="selected-value row">
            <template v-if="selectedItem">
                <span class="flex">
                    <slot name="selected-value" :selectedItem="selectedItem" :displayField="displayField">
                        {{ selectedItem[displayField] }}
                    </slot>
                </span>
            </template>
            <span v-else class="nothing-selected flex">
                <slot name="nothing-selected">(nothing selected)</slot>
            </span>
            <div class="arrow">
                <fa icon="angle-down" v-if="!isFocus"></fa>
                <fa icon="angle-up" v-else></fa>
            </div>
        </div>
        <div class="dropdown">
            <v-input class="filter" v-model="filter" type="text" placeholder="Search..." ref="input" :disabled="isCreating"></v-input>
            <fa icon="spinner" spin class="is--creating" v-if="isCreating"></fa>
            
            <ul class="values" v-if="items.length > 0" ref="list">
                <li v-for="item in items"
                    :class="{ active: item[valueField] === value }"
                    @click="select(item)" ref="items">
                    <slot name="item" :item="item" :displayField="displayField">
                        {{ item[displayField] }}
                    </slot>
                </li>
            </ul>
            <span v-else class="nothing-found">
                Nothing found for <span class="filter-term">"{{ filter }}"</span>
                <span class="create-item">
                    (Press "enter" to create a new item)
                </span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-select',
    description: 'A custom styled select field with search input.',
    props: {
        data: {
            type: Array,
            required: true,
            description: 'The data which should be shown.',
            default: []
        },
        displayField: {
            type: String,
            required: false,
            description: 'The underlying data field name to bind to this selectfield.',
            default: 'label'
        },
        valueField: {
            type: String,
            required: false,
            description: 'The underlying data field name to bind to this selectfield.',
            default: 'id'
        },
        value: {
            type: null,
            required: true,
            description: 'The associated value.'
        }
    },
    computed: {
        selectedItem() {
            return this.data.find(item => item.id === this.value)
        },
        selectedIndex() {
            return this.items.findIndex(item => item.id === this.value)
        },
        items() {
            let me = this
            
            if (!me.filter) {
                return me.data
            }
            
            return me.data.filter(item => item[me.displayField].toLowerCase().indexOf(me.filter.toLowerCase()) > -1)
        }
    },
    data: () => ({
        filter: '',
        isFocus: false,
        preventUnfocus: false,
        preventFocus: false,
        isCreating: false
    }),
    watch: {
        filter() {
            let me = this
            
            me.$nextTick(() => {
                me.ensureItemVisibility()
            })
        }
    },
    beforeMount() {
        let me = this
    
        document.addEventListener('click', me.onBodyClick.bind(me))
        document.addEventListener('keydown', me.onKeyDown.bind(me))
    },
    beforeDestroy() {
        let me = this
    
        document.removeEventListener('click', me.onBodyClick.bind(me))
        document.removeEventListener('keydown', me.onKeyDown.bind(me))
    },
    methods: {
        select (item, unfocus) {
            let me = this
            
            if (typeof unfocus === 'undefined') {
                unfocus = true
            }
            
            me.$emit('input', item[me.valueField])
            
            if (unfocus) {
                me.isFocus = false
                me.preventFocus = true
            } else {
                me.$nextTick(() => {
                    me.ensureItemVisibility()
                })
            }
        },
        focus() {
            let me = this
            
            if (me.preventFocus) {
                me.preventFocus = false
                return
            }
        
            me.preventUnfocus = true
            me.isFocus = true
            
            me.$nextTick(() => {
                me.$refs.input.focus()
            })
        },
        onBodyClick() {
            let me = this
        
            if (me.preventUnfocus) {
                me.preventUnfocus = false
                return
            }
        
            me.isFocus = false
        },
        onKeyDown (e) {
            let me = this
            
            if (me.isFocus === false) {
                return
            }
            
            if (e.keyCode === 38) { // up
                let prevIndex = me.selectedIndex - 1
                if (prevIndex >= 0) {
                    me.select(me.items[prevIndex], false)
                }
            } else if (e.keyCode === 40) { // down
                let nextIndex = me.selectedIndex + 1
                if (nextIndex < me.items.length) {
                    me.select(me.items[nextIndex], false)
                }
            } else if (e.keyCode === 27) { // esc
                if (me.filter.length > 0) { // first ESC clears the search box
                    me.filter = ''
                } else { // second ESC closes the selectbox
                    me.isFocus = false
                }
            } else if (e.keyCode === 13) {
                if (me.items.length === 1) {
                    me.select(me.items[0], false)
                } else if (me.items.length === 0) {
                    me.create()
                }
            }
        },
        ensureItemVisibility() {
            let me = this
    
            // scroll to selected item
            let _list  = me.$refs.list
            let _items = me.$refs.items
            let _item  = _items.find(i => i.classList.contains('active'))
    
            if (_item) {
                // viewport
                let offsetTop = _item.offsetTop
                let height    = _item.offsetHeight
        
                // make sure the selected item is visible
                _list.scrollTop = offsetTop + (height * 3) - _list.offsetHeight
            }
        },
        create () {
            let me = this
            
            me.$emit('create', me.filter, {
                spin() {
                    me.isCreating = true
                },
                done (item) {
                    me.isCreating = false
                    
                    me.$nextTick(() => {
                        me.filter = ''
                        me.select(item, false)
                    })
                }
            })
        }
    }
}
</script>