<template>
    <div class="form-input">
        <input :type="type" :value="value" :required="required" :placeholder="placeholder"
               :readonly="readonly" :disabled="disabled" :id="id" :name="name">
    </div>
</template>

<script>
export default {
    name: 'v-input',
    props: [
        /**
         * The type of the input.
         *
         * Can be: text, email, password, number, date, ..
         */
        'type',
        /**
         * The value of the input
         */
        'value',
        /**
         * Whether the input should be required or not.
         */
        'required',
        /**
         * Whether the input is read-only or not.
         */
        'readonly',
        /**
         * Whether the input is disabled or not.
         */
        'disabled',
        /**
         * The id of the input
         */
        'id',
        /**
         * The name of the input
         */
        'name',
        /**
         * The input placeholder
         */
        'placeholder'
    ]
}
</script>