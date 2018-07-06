<template>
    <div class="index row">
        <div class="menu">
            <ul>
                <li v-for="item in menu" @click="use(item)"
                    :class="{ 'is--active': selectedComponent === item.component }">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div class="component-container flex">
            <component v-if="selectedComponent" :is="selectedComponent"></component>
        </div>
    </div>
</template>

<script>
import FaComponent from '@/views/components/FontAwesome'
import ButtonComponent from '@/views/components/Button'
import CheckboxComponent from '@/views/components/Checkbox'
import FileComponent from '@/views/components/File'
import InfoComponent from '@/views/components/Info'
import InputComponent from '@/views/components/Input'
import ModalComponent from '@/views/components/Modal'
import ProgressBarComponent from '@/views/components/ProgressBar'
import SelectComponent from '@/views/components/Select'
import TabMenuComponent from '@/views/components/TabMenu'
import TabComponent from '@/views/components/Tab'
import ListComponent from '@/views/components/List'

export default {
    name: 'index',
    data: () => ({
        menu: [
            { name: 'font-awesome', component: 'fa-component' },
            { name: 'v-button', component: 'button-component' },
            { name: 'v-checkbox', component: 'checkbox-component' },
            { name: 'v-file', component: 'file-component' },
            { name: 'v-info', component: 'info-component' },
            { name: 'v-input', component: 'input-component' },
            { name: 'v-modal', component: 'modal-component' },
            { name: 'v-progress', component: 'progress-bar-component' },
            { name: 'v-select', component: 'select-component' },
            { name: 'v-tab-menu', component: 'tab-menu-component' },
            { name: 'v-tab', component: 'tab-component' },
            { name: 'v-list', component: 'list-component' }
        ],
        selectedComponent: 'fa-component'
    }),
    components: {
        FaComponent,
        ButtonComponent,
        CheckboxComponent,
        FileComponent,
        InfoComponent,
        InputComponent,
        ModalComponent,
        ProgressBarComponent,
        SelectComponent,
        TabMenuComponent,
        TabComponent,
        ListComponent
    },
    mounted() {
        let me = this
        let id = me.$route.params.id
        
        if (!id) {
            id = me.menu[0].name
            me.$router.push({ name: 'components', params: { id } })
            return
        }
    
        let item = me.menu.find(i => i.name === id)
        if (item) {
            me.selectedComponent = item.component
        } else {
            id = me.menu[0].name
            me.$router.push({ name: 'components', params: { id } })
        }
    },
    methods: {
        use (item) {
            let me = this
            
            me.selectedComponent = item.component
            me.$router.push({ name: 'components', params: { id: item.name } })
        }
    }
}
</script>