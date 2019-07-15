<template>
    <Header :loggedOn="loggedOn"></Header>
    
</template>
<script>
import Header from '../../components/Header.vue'
import PageMixin from '../../components/Page'
export default {
    mixins: [PageMixin],
    components: {
        Header
    },
    data(){
        return {
            
        }
    },
    mounted(){
        window.location.replace('/')
    }
}
</script>
