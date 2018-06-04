<template comments>
    <v-component name="v-input" hasExamples="true">
        <div class="component-example">
            <div class="example-code">
                <v-code language="html">
!<!--
<v-input type="text" placeholder="A simple input"></v-input>
-->
                </v-code>
            </div>
            <div class="example-content">
                <v-input type="text" placeholder="A simple input"></v-input>
            </div>
        </div>
        <div class="component-example">
            <div class="example-code">
                <v-code language="html">
!<!--
<div class="row">
    <v-input type="text" placeholder="A simple input with an info-box" class="flex"></v-input>
    <v-info>I am a info box</v-info>
</div>
-->
                </v-code>
            </div>
            <div class="example-content row">
                <v-input type="text" placeholder="A simple input with an info-box" class="flex"></v-input>
                <v-info>I am a info box</v-info>
            </div>
        </div>
        <div class="component-example">
            <div class="example-code">
                <v-code language="html">
!<!--
<v-input type="text" placeholder="A simple input with validation" v-model="input.value"
         @validate="validateInput"></v-input>
-->
                </v-code>
            </div>
            <div class="example-code">
                <v-code language="javascript">
!<!--
validateInput({ ok, fail, clear, spin }) {
    let me = this
    let value = me.input.value
    
    if (value.length === 0) {
        fail("Please enter a random value in this field.")
    } else if (value.length > 8) {
        fail("The entered value is too long. Maximum character length is 8.")
    } else {
        spin()
    
        setTimeout(() => {
            ok()
        }, 250)
    }
}
-->
                </v-code>
            </div>
            <div class="example-content">
                <v-input type="text" placeholder="A simple input with validation" v-model="input.value"
                         @validate="validateInput"></v-input>
            </div>
        </div>
        <div class="component-example">
            <div class="example-code">
                <v-code language="html">
!<!--
<v-input type="textarea" placeholder="A simple textarea" v-model="input.value"
         @validate="validateInput"></v-input>
-->
                </v-code>
            </div>
            <div class="example-content">
                <v-input type="textarea" placeholder="A simple textarea" v-model="input.value"
                         @validate="validateInput"></v-input>
            </div>
        </div>
    </v-component>
</template>

<script>
export default {
    name: 'input-component',
    data: () => ({
        input: {
            value: ''
        }
    }),
    methods: {
        validateInput({ ok, fail, clear, spin }) {
            let me = this
            let value = me.input.value
        
            if (value.length === 0) {
                fail('Please enter a random value in this field.')
            } else if (value.length > 8) {
                fail('The entered value is too long. Maximum character length is 8.')
            } else {
                spin()
            
                setTimeout(() => {
                    ok()
                }, 250)
            }
        }
    }
}
</script>