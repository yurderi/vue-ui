<template comments>
    <v-component name="v-select" hasExamples="true">
        <div class="component-example">
            <div class="example-code">
                <v-code language="html">
!<!--
<v-select :data="languages" v-model="selectedLanguage" displayField="language" @create="create">
    <template slot="nothing-selected">Please select</template>
    <template slot="selected-value" slot-scope="value">
        {{ value.selectedItem[value.displayField] }}
        <span class="selected-id" style="color:#999;font-size:12px;">
            (ID: {{ value.selectedItem.id }})
        </span>
    </template>
    <template slot="item" slot-scope="i">
        <span style="color:#999;font-size:12px;">
            {{ i.item.id }}
        </span>
        {{ i.item.language }}
    </template>
</v-select>
-->
                </v-code>
            </div>
            <div class="example-code">
                <v-code language="javascript">
!<!--
export default {
    comments: true,
    data: () => ({
        selectedLanguage: -1,
        languages: [
            { id: 1, language: 'Germany', translations: false },
            { id: 2, language: 'USA', translations: true },
            { id: 3, language: 'Russia', translations: true },
            { id: 4, language: 'Italia', translations: true },
            { id: 5, language: 'Portugal', translations: true },
            { id: 6, language: 'Polska', translations: true },
            { id: 7, language: 'Sweden', translations: true },
            { id: 8, language: 'Switzerland', translations: true },
            { id: 9, language: 'Luxemburg', translations: true },
            { id: 10, language: 'Holland', translations: true },
            { id: 11, language: 'India', translations: true },
        ]
    }),
    methods: {
        create (value, { spin, done }) {
            let me = this
            let item = {
                id: Math.random(),
                language: value,
                translations: false
            }
            
            spin()
            setTimeout(() => {
                me.languages.push(item)
                done(item)
            }, 500)
        }
    }
}
-->
                </v-code>
            </div>
        </div>
        <div class="example-content">
            <v-select :data="languages" v-model="selectedLanguage" displayField="language" @create="create">
                <template slot="nothing-selected">Please select</template>
                <template slot="selected-value" slot-scope="value">
                    {{ value.selectedItem[value.displayField] }}
                    <span class="selected-id" style="color:#999;font-size:12px;">
                        (ID: {{ value.selectedItem.id }})
                    </span>
                </template>
                <template slot="item" slot-scope="i">
                    <span style="color:#999;font-size:12px;">
                        {{ i.item.id }}
                    </span>
                    {{ i.item.language }}
                </template>
            </v-select>
        </div>
    </v-component>
</template>

<script>
export default {
    comments: true,
    data: () => ({
        selectedLanguage: -1,
        languages: [
            { id: 1, language: 'Germany', translations: false },
            { id: 2, language: 'USA', translations: true },
            { id: 3, language: 'Russia', translations: true },
            { id: 4, language: 'Italia', translations: true },
            { id: 5, language: 'Portugal', translations: true },
            { id: 6, language: 'Polska', translations: true },
            { id: 7, language: 'Sweden', translations: true },
            { id: 8, language: 'Switzerland', translations: true },
            { id: 9, language: 'Luxemburg', translations: true, _disabled: true },
            { id: 10, language: 'Holland', translations: true },
            { id: 11, language: 'India', translations: true },
        ]
    }),
    methods: {
        create (value, { spin, done }) {
            let me = this
            let item = {
                id: Math.random(),
                language: value,
                translations: false
            }
            
            spin()
            setTimeout(() => {
                me.languages.push(item)
                done(item)
            }, 500)
        }
    }
}
</script>