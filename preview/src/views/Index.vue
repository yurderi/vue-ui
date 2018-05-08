<template>
    <div class="index">
        <!-- Component: fa -->
        <div class="component">
            <div class="component-name">
                fa
            </div>
            <div class="component-description">
                font-awesome icon
            </div>
            <div class="component-properties">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Required</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>icon</td>
                        <td>The icon that should be shown.</td>
                        <td>yes</td>
                    </tr>
                    <tr>
                        <td>spin</td>
                        <td>Whether the icon should be spinning or not</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>pulse</td>
                        <td>Show pulse animation</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>fixed-width</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>border</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>list-item</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>flip</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>rotation</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>pull</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>transform</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>mask</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>symbol</td>
                        <td></td>
                        <td>no</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="component-examples">
                <div class="examples-container-header">
                    Examples
                </div>
                <div class="component-example">
                    <div class="example-content">
                        See <a href="https://github.com/FortAwesome/vue-fontawesome" target="_blank">official documentation.</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Component: v-input -->
        <div class="component">
            <div class="component-name">
                input
            </div>
            <div class="component-description">
                A configurable input with some features.
            </div>
            <div class="component-properties">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Required</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>value</td>
                        <td>The value of the input.</td>
                        <td>yes</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>The type of the input. Can be text, password, email etc.</td>
                        <td>yes</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="component-examples">
                <div class="examples-container-header">
                    Examples
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<v-input type="text" placeholder="A simple input"></v-input>
                        '></v-code>
                    </div>
                    <div class="example-content">
                        <v-input type="text" placeholder="A simple input"></v-input>
                    </div>
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<div class="row">
    <v-input type="text" placeholder="A simple input with an info-box" class="flex"></v-input>
    <v-info>I am a info box</v-info>
</div>
                        '></v-code>
                    </div>
                    <div class="example-content row">
                        <v-input type="text" placeholder="A simple input with an info-box" class="flex"></v-input>
                        <v-info>I am a info box</v-info>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Component: v-button -->
        <div class="component">
            <div class="component-name">
                button
            </div>
            <div class="component-description">
                A configurable button with some features.
            </div>
            <div class="component-properties">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Required</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>disabled</td>
                        <td>Whether the button should be disabled or not.</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>spin</td>
                        <td>Whether the button has a loader or not.</td>
                        <td>no</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="component-examples">
                <div class="examples-container-header">
                    Examples
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<v-button>Just a simple button which does nothing</v-button>
                        '></v-code>
                    </div>
                    <div class="example-content">
                        <v-button>Just a simple button which does nothing</v-button>
                    </div>
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<v-button disabled>A disabled button</v-button>
                        '></v-code>
                    </div>
                    <div class="example-content">
                        <v-button disabled>A disabled button</v-button>
                    </div>
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<v-button spin>A loading button</v-button>
                        '></v-code>
                    </div>
                    <div class="example-content">
                        <v-button spin>A loading button</v-button>
                    </div>
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<v-button spin progress="50">A loading button with progress</v-button>
                        '></v-code>
                    </div>
                    <div class="example-content">
                        <v-button spin progress="50">A loading button with progress</v-button>
                    </div>
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<v-button progress="50">A simple button with progress</v-button>
                        '></v-code>
                    </div>
                    <div class="example-content">
                        <v-button progress="50">A simple button with progress</v-button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Component: v-progressbar -->
        <div class="component">
            <div class="component-name">
                progress bar
            </div>
            <div class="component-description">
                a simple progress bar
            </div>
            <div class="component-properties">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Required</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>value</td>
                        <td>The current progress value</td>
                        <td>yes</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>The maximum value. Default is 100.</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>text</td>
                        <td>An optional text that can be displayed in the middle of the progress bar.</td>
                        <td>no</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="component-examples">
                <div class="examples-container-header">
                    Examples
                </div>
                <div class="component-example">
                    <div class="example-code">
                       <v-code code='
<v-progress value="50"></v-progress>
                       '></v-code>
                    </div>
                    <div class="example-content">
                        <v-progress value="50"></v-progress>
                    </div>
                </div>
                <div class="component-example">
                    <div class="example-code">
                       <v-code code='
<v-progress value="50" text="50%"></v-progress>
                       '></v-code>
                    </div>
                    <div class="example-content">
                        <v-progress value="50" text="50%"></v-progress>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Component: v-info -->
        <div class="component">
            <div class="component-name">
                info
            </div>
            <div class="component-description">
                an info button which shows some text on hover
            </div>
            <div class="component-examples">
                <div class="examples-container-header">
                    Example
                </div>
                <div class="component-example">
                    <div class="example-code">
                       <v-code code='
<v-info>Some Information to show.</v-info>
                       '></v-code>
                    </div>
                    <div class="example-content">
                        <v-info>Some Information to show.</v-info>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Component: v-checkbox -->
        <div class="component">
            <div class="component-name">
                checkbox
            </div>
            <div class="component-description">
                a checkbox with custom style
            </div>
            <div class="component-properties">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Required</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>name</td>
                        <td>The name of the input</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>The field label</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>The value of the checkbox. Can be true or false.</td>
                        <td>yes</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="component-examples">
                <div class="examples-container-header">
                    Example
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<v-checkbox name="example_checkbox"
            label="Use this framework."
            v-model="checkbox.value"></v-checkbox>
                        '></v-code>
                    </div>
                    <div class="example-content">
                        <v-checkbox name="example_checkbox"
                                    label="Use this framework."
                                    v-model="checkbox.value"></v-checkbox>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Component: v-file -->
        <div class="component">
            <div class="component-name">
                file input
            </div>
            <div class="component-description">
                an extended file input
            </div>
            <div class="component-properties">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Required</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>id</td>
                        <td>The id of the field input.</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>The type of the file input. Can be "directory" or "file". Defaults to "file"</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>The associated field value</td>
                        <td>yes</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="component-examples">
                <div class="examples-container-header">
                    Examples
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<v-file id="myFile" v-model="file.first"></v-file>
                        '></v-code>
                    </div>
                    <div class="example-content">
                        <v-file id="myFile" v-model="file.first"></v-file>
                    </div>
                </div>
                <div class="component-example">
                    <div class="example-code">
                        <v-code code='
<v-file id="mySecondFile" v-model="file.second" type="directory"></v-file>
                        '></v-code>
                    </div>
                    <div class="example-content">
                        <v-file id="mySecondFile" v-model="file.second" type="directory"></v-file>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="component">
            <div class="component-name">
                modal
            </div>
            <div class="component-description">
                a configurable modal
            </div>
            <div class="component-properties">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Required</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div class="component-examples">
                <div class="examples-container-header">
                    Examples
                </div>
                <div class="component-example">
                <div class="example-code">
                    <v-code code='
<button @click="modal.opened = true">
    Open modal
</button>

<v-modal v-if="modal.opened">
    <div class="body column">
        Hello World
        
        <button @click="modal.opened = false">
            Close modal
        </button>
    </div>
</v-modal>
                    '></v-code>
                </div>
                <div class="example-content">
                    <button @click="modal.opened = true">
                        Open modal
                    </button>
                    
                    <v-modal v-if="modal.opened">
                        <div class="body column">
                            Hello World
                            
                            <button @click="modal.opened = false">
                                Close modal
                            </button>
                        </div>
                    </v-modal>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data: () => ({
        // Component: v-checkbox
        checkbox: {
            value: false
        },
        // Component: v-file
        file: {
            first: '',
            second: ''
        },
        // Component: modal
        modal: {
            opened: false
        }
    })
}
</script>