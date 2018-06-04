<template comments>
    <v-component name="v-checkbox" hasExamples="true">
        <div class="component-example">
            <div class="example-code">
                <v-code language="html">
!<!--
<v-checkbox name="example_checkbox"
            label="Use this framework."
            v-model="value"></v-checkbox>
-->
                </v-code>
            </div>
            <div class="example-content">
                <v-checkbox name="example_checkbox"
                            label="Use this framework."
                            v-model="value"></v-checkbox>
            </div>
        </div>
    </v-component>
</template>

<script>
export default {
    name: 'checkbox-component',
    data: () => ({
        value: false
    })
}
</script>