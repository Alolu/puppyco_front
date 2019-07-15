// @ts-nocheck
<template>
    <div class="error-page">
        <Header :loggedOn="loggedOn"></Header>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import PageMixin from '../components/Page'
export default {
    mixins:[PageMixin],
    components : {
        Header
    },
    data: function () {
        return {}
    },
    mounted(){
        window.history.replaceState("object or string", "Title", "/error")
    }
}
</script>

<style lang="css">

</style>
