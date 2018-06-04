<template comments>
    <v-component name="v-file" hasExamples="true">
        <div class="component-example">
            <div class="example-code">
                <v-code language="html">
!<!--
<v-file id="myFile" v-model="file.first"></v-file>
-->
                </v-code>
            </div>
            <div class="example-content">
                <v-file id="myFile" v-model="file.first"></v-file>
            </div>
        </div>
        <div class="component-example">
            <div class="example-code">
                <v-code language="html">
!<!--
<v-file id="mySecondFile" v-model="file.second" type="directory"></v-file>
-->
                </v-code>
            </div>
            <div class="example-content">
                <v-file id="mySecondFile" v-model="file.second" type="directory"></v-file>
            </div>
        </div>
    </v-component>
</template>

<script>
export default {
    name: 'file-component',
    data: () => ({
        file: {
            first: '',
            second: ''
        }
    })
}
</script>