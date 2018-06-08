<template>
    <div class="component">
        <div class="component-name">
            fa
        </div>
        <div class="component-description">
            font-awesome icon
        </div>
        <v-tab-menu>
            <v-tab id="properties" label="Properties" icon="list">
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
            </v-tab>
            <v-tab id="examples" label="Examples" icon="file-code">
                <div class="component-examples">
                    <div class="component-example">
                        <div class="example-content">
                            See <a href="https://github.com/FortAwesome/vue-fontawesome#vue-fontawesome" target="_blank">official documentation.</a>
                        </div>
                    </div>
                </div>
            </v-tab>
        </v-tab-menu>
    </div>
</template>

<script>
export default {
    name: 'font-awesome',
    data: () => ({
        tab: 'properties'
    })
}
</script>