<template>
    <div class="tab-item" :class="{ active }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'v-tab',
    props: {
        id: {
            type: String,
            required: true,
            description: 'The internal name of the tab.',
        },
        label: {
            type: String,
            required: false,
            description: 'The label for the tab menu list. Alternatively the name will be used.',
        },
        icon: {
            type: String,
            required: false,
            description: 'An optional icon for the tab menu list.'
        }
    },
    data: () => ({
        active: false
    })
}
</script>