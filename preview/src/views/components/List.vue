<template comments>
    <v-component name="v-list" hasExamples="true">
        <div class="component-example">
            <div class="example-code">
               <v-code language="html">
!<!--
<v-list v-model="values" :unique="true"></v-list>
-->
               </v-code>
            </div>
            <div class="example-code">
               <v-code language="javascript">
!<!--
export default {
    data: () => ({
        values: [
            'Item 1',
            'Item 2',
            'Item 3'
        ]
    })
}
-->
               </v-code>
            </div>
            <div class="example-content">
                <v-list v-model="values" :unique="true"></v-list>
            </div>
        </div>
    </v-component>
</template>

<script>
export default {
    data: () => ({
        values: [
            'Item 1',
            'Item 2',
            'Item 3'
        ]
    })
}
</script>