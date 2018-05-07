<template>
    <div class="index">
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
    </div>
</template>