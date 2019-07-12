<template>
    <div class="layout">
        <Header></Header>
        <div class="spacer"></div>
    </div>
</template>
<script>
import Header from './Header.vue'
export default {
    name: 'Layout',
    data: function () {
        return {}
    },
    components: {
        Header
    }
}
</script>
<style>
    .spacer {
        width: 100%;
        height: 100px;
    }
</style>
