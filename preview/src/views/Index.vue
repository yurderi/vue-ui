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
            { name: 'v-progressbar', component: 'progress-bar-component' },
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
        ProgressBarComponent
    },
    methods: {
        use (item) {
            let me = this
            
            me.selectedComponent = item.component
        }
    }
}
</script>