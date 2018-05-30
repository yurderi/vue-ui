<template>
     <v-component name="v-modal" hasExamples="true">
        <div class="component-example">
            <div class="example-code">
                <v-code code='
<v-button @click="modal.opened = true">
    Open modal
</v-button>

<v-modal v-if="modal.opened">
    <div class="body column">
        Hello World
        
        <v-button @click="modal.opened = false">
            Close modal
        </v-button>
    </div>
</v-modal>
                ' language="html"></v-code>
            </div>
            <div class="example-content">
                <v-button @click="modal.opened = true">
                    Open modal
                </v-button>
                
                <v-modal v-if="modal.opened">
                    <div class="body column">
                        Hello World
                        
                        <v-button @click="modal.opened = false">
                            Close modal
                        </v-button>
                    </div>
                </v-modal>
            </div>
        </div>
         <div class="component-example">
            <div class="example-code">
                <v-code code='
<v-button @click="modal.opened2 = true">
    Open modal
</v-button>

<v-modal v-if="modal.opened2" width="300px" height="150px">
    <div class="body column">
        Hello World
        
        <v-button @click="modal.opened2 = false">
            Close modal
        </v-button>
    </div>
</v-modal>
                ' language="html"></v-code>
            </div>
            <div class="example-content">
                <v-button @click="modal.opened2 = true">
                    Open modal with fixed width and height
                </v-button>
                
                <v-modal v-if="modal.opened2" width="300px" height="150px">
                    <div class="body column">
                        Hello World
                        
                        <v-button @click="modal.opened2 = false">
                            Close modal
                        </v-button>
                    </div>
                </v-modal>
            </div>
        </div>
    </v-component>
</template>

<script>
export default {
    name: 'modal-component',
    data: () => ({
        modal: {
            opened: false,
            opened2: false
        }
    })
}
</script>