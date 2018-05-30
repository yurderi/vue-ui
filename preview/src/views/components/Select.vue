<template>
    <v-component name="v-select" hasExamples="true">
        <div class="component-example">
            <div class="example-code">
               <v-code code='
<v-select :data="languages" v-model="selectedLanguage" displayField="language"></v-select>
               ' language="html"></v-code>
            </div>
            <div class="example-code">
                <v-code code="
{
    selectedLanguage: 1,
    languages: [
        { id: 1, language: 'German', translations: false },
        { id: 2, language: 'English', translations: true }
    ]
}
                " language="javascript"></v-code>
            </div>
        </div>
        <div class="example-content">
            <v-select :data="languages" v-model="selectedLanguage" displayField="language"></v-select>
        </div>
    </v-component>
</template>

<script>
export default {
    data: () => ({
        selectedLanguage: 1,
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
    })
}
</script>