<template>
    <div class="info">
        <div class="info-button">
            <fa icon="info"></fa>
        </div>
        <div class="info-text">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-info',
    description: 'A button which shows text on hover.',
}
</script>