<template>
    <div class="component">
        <div class="component-name">
            {{ name }}
        </div>
        <div class="component-description">
            {{ description }}
        </div>
        <v-tab-menu ref="tabMenu">
            <v-tab id="properties" label="Properties" icon="list" v-if="options.props">
                <div class="component-properties" v-if="options.props">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Required</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(prop, propName) in options.props">
                            <td>{{ propName }}</td>
                            <td>{{ prop.description }}</td>
                            <td>{{ convertTypeToString(prop.type) }}</td>
                            <td>{{ prop.required ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr v-for="(event, eventName) in options.events">
                            <td>@{{ eventName }}</td>
                            <td>{{ event.description }}</td>
                            <td>event</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </v-tab>
            <v-tab id="examples" label="Examples" icon="file-code">
                <div class="component-examples" v-if="hasExamples">
                    <slot></slot>
                </div>
            </v-tab>
        </v-tab-menu>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    comments: true,
    name: 'v-component',
    props: [
        'name',
        'hasExamples'
    ],
    data: () => ({
        options: {
            description: '',
            props: {}
        }
    }),
    mounted() {
        let me = this
        let component = Vue.options.components[me.name]
        
        me.options = component.extendOptions
    
        if (me.hasExamples) {
            me.$refs.tabMenu.select('examples')
        } else if (me.options.props) {
            me.$refs.tabMenu.select('properties')
        }
    },
    computed: {
        description() {
            return this.options.description
        }
    },
    methods: {
        convertTypeToString(type) {
            switch (type) {
                case Boolean:
                    return 'bool'
                case Number:
                    return 'number'
                case String:
                    return 'string'
                case Array:
                    return 'array'
                default:
                    return 'mixed'
            }
        }
    }
}
</script>