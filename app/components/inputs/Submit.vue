<template>
    <input class="submit__input" :class="{submit__large: large, 'no-width': noWidth}" type="submit" />
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props: [
        'large',
        'no-width'
    ]
}
</script>
<style>
    .submit__input {
        background-color: #FF9A02;
        color: white;
        border: solid 1px #FF9A02;
        border-radius: 2px;
        font-size: 1em;
        padding: 9px 14px;
        width: 205px;
    }

    .submit__input:focus {
        outline: 0 none;
    }
    .submit__large {
        width: 250px;
    } 

    .no-width {
    width : auto !important ;
    }
</style>
