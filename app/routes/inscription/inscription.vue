<template>
    <section class="wrapper">
        <Header :loggedOn="loggedOn"></Header>
        <Hero title="Inscription"></Hero>
    </section>
</template>
<script>
import Header from '../../components/Header.vue'
import Hero from '../../components/Hero.vue'
import PageMixin from '../../components/Page'
export default {
    mixins: [PageMixin],
    components: {
        Header,
        Hero
    },
    data(){
        return {
            
        }
    },
    mounted(){
        if(this.loggedOn) window.location.replace('/')
    }
}
</script>
