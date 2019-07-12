// @ts-nocheck
<template>
    <div class="error-page">
        <Header></Header>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import { header } from 'express-validator/check';
export default {
    components : {
        Header
    },
    data: function () {
        return {}
    }
}
</script>

<style lang="css">

</style>
