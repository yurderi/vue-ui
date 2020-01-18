<template>
    <div class="tab-menu">
        <ul v-if="tabs.length > 1">
            <li v-for="tab in tabs" :class="{ active: tab.isActive }"
                @click="select(tab)">
                <fa v-if="tab.icon" :icon="tab.icon"></fa>
                <span>{{ tab.label }}</span>
            </li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-tab-menu',
    data: () => ({
        tabs: []
    }),
    mounted() {
        let me = this
        
        me.tabs = me.$children
    
        if (me.tabs.length > 0) {
            let hasActive = false
            
            me.tabs.forEach(tab => {
                if (tab.active === true) {
                    hasActive = true
                    tab.isActive = true
                }
            })
            
            if (hasActive === false) {
                me.tabs[0].isActive = true
            }
        }
    },
    methods: {
        select (tab) {
            let me = this
    
            if (typeof tab === 'string') {
                tab = me.tabs.find(t => t.id === tab)
                me.select(tab)
            } else if (typeof tab === 'object') {
                me.tabs.forEach(tab => tab.isActive = false)
                tab.isActive = true
            }
        }
    }
}
</script>