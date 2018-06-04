<template>
    <div class="tab-menu">
        <ul>
            <li v-for="tab in tabs" :class="{ active: tab.active }"
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
            me.tabs[0].active = true
        }
    },
    methods: {
        select (tab) {
            let me = this
    
            if (typeof tab === 'string') {
                tab = me.tabs.find(t => t.id === tab)
                me.select(tab)
            } else if (typeof tab === 'object') {
                me.tabs.forEach(tab => tab.active = false)
                tab.active = true
            }
        }
    }
}
</script>