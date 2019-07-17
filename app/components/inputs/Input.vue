<template>
    <input 
        @input="$emit('input', $event.target.value)" 
        :value="value" 
        :class="{largeInput: large, input: true,quantity: quantity}" 
        v-bind="$attrs"
        :placeholder="$attrs.placeholder" 
    />
</template>
<script>
export default {
    name: 'Input',
    inheritAttrs: false,
    props: ['value','large','quantity']
}
</script>
<style>
    .input {
        display:block;
        border: solid 1px #FF9A02;
        border-radius: 4px;
        font-size: 1em;
        width: 175px;
        padding: 9px 14px
    }
    .input:focus {
        outline: 0 none
    }

    .largeInput {
        width: 220px;
    }
    .quantity{
        width: 20px;
        display: inline-block;
    }
</style>