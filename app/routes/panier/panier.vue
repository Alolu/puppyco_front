<template>
    <div>
        <Header :loggedOn="loggedOn"></Header>
    </div>
</template>
<script>
import PageMixin from '../../components/Page'
import Header from '../../components/Header.vue'
export default {
    components:{
        Header
    },
    data(){
        return {

        }
    },
    mixins: [PageMixin]
}
</script>
