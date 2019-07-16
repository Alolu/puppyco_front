<template>
    <section class="wrapper">
        <Header :loggedOn="loggedOn"></Header>
        <Hero title="Inscription"></Hero>
        <div class="register__wrapper">
            <label> Email </label>
            <Input :large="true" placeholder="Email" class="register__email" />
            <label> Mot de passe </label>
            <Input :large="true" placeholder="Mot de passe" class="register__password" />
            <label> Nom </label>
            <Input :large="true" placeholder="Nom" class="register__nom" />
            <label> Prenom </label>
            <Input :large="true" placeholder="Prenom" class="register__prenom" />
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
<style>
    .register__wrapper {
        
    }
</style>

