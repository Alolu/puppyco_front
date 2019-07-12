<template>
    <input :class="{largeInput: large, input: true}" v-bind="$attrs" :placeholder="$attrs.placeholder" />
</template>
<script>
export default {
    name: 'Input',
    inheritAttrs: false,
    props: {
        large:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style>
    .input {
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