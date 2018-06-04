<template>
    <div class="validation-container">
        <div class="validation-icon" v-if="validation.ok !== null">
            <fa icon="check-circle" v-if="validation.ok === true && validation.spin === false" class="ok"></fa>
            <fa icon="exclamation-circle" v-if="validation.ok === false && validation.spin === false" class="fail"></fa>
            <fa icon="spinner" v-if="validation.spin === true" class="spin" spin></fa>
        </div>
    
        <div class="validation-message" v-if="validation.ok === false">
            <span>{{ validation.message }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-validation',
    props: {
        validation: {
            type: Object,
            required: true,
            description: 'The validation property.',
            default: {
                ok: null,
                message: '',
                spim: false
            }
        }
    }
}
</script>