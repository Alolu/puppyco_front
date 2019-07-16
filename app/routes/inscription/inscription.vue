<template>
    <section class="wrapper">
        <Header :loggedOn="loggedOn"></Header>
        <Hero title="Inscription"></Hero>
        <div class="register__wrapper">
            <label> Email </label>
            <Input class="register__email" />
        </div>
    </section>
</template>
<script>
import Header from '../../components/Header.vue'
import Hero from '../../components/Hero.vue'
import Input from '../../components/inputs/Input.vue'
import PageMixin from '../../components/Page'
export default {
    mixins: [PageMixin],
    components: {
        Header,
        Hero,
        Input
    },
    data(){
        return {
            
        }
    },
    mounted(){
        this.$on('login',()=>{
            location.replace('/')
        })
    }
}
</script>
