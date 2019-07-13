<template>
    <input 
        @input="$emit('input', $event.target.value)" 
        :value="value" 
        :class="{largeInput: large, input: true}" 
        v-bind="$attrs" 
        :placeholder="$attrs.placeholder" 
    />
</template>
<script>
export default {
    name: 'Input',
    inheritAttrs: false,
    props: ['value','large']
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
    .largeInput {
        width: 220px;
    }
</style>