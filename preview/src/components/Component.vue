<template>
    <div class="component">
        <div class="component-name">
            {{ name }}
        </div>
        <div class="component-description">
            {{ description }}
        </div>
        <div class="tab-menu" v-if="tab">
            <ul>
                <li :class="{ active: tab === 'properties' }" @click="tab = 'properties'" v-if="options.props">
                    <fa icon="list"></fa>
                    <span>Properties</span>
                </li>
                <li :class="{ active: tab === 'examples' }" @click="tab = 'examples'" v-if="hasExamples">
                    <fa icon="file-code"></fa>
                    <span>Examples</span>
                </li>
            </ul>
        </div>
        <div class="tab-content" v-if="tab">
            <div class="tab-item" :class="{ active: tab === 'properties' }">
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
            </div>
            <div class="tab-item" :class="{ active: tab === 'examples' }">
                 <div class="component-examples" v-if="hasExamples">
                    <slot></slot>
                </div>
            </div>
        </div>
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
        },
        tab: null
    }),
    mounted() {
        let me = this
        let component = Vue.options.components[me.name]
        
        me.options = component.extendOptions
    
        if (me.hasExamples) {
            me.tab = 'examples'
        } else if (me.options.props) {
            me.tab = 'properties'
        } else {
            me.tab = null
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