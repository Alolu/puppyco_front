<template>
    <section class="wrapper">
        <Header :loggedOn="loggedOn"></Header>
        <Hero title="Inscription"></Hero>
        <div class="register__wrapper">
            <label> Email </label>
            <Input v-model="email" :large="true" placeholder="Email" class="register__input register__email" />
            <label> Mot de passe </label>
            <Input v-model="password" :large="true" placeholder="Mot de passe" class="register__input register__password" />
            <label> Nom </label>
            <Input v-model="nom" :large="true" placeholder="Nom" class="register__input register__nom" />
            <label> Prenom </label>
            <Input v-model="prenom" :large="true" placeholder="Prenom" class="register__input register__prenom" />
            <Submit @click.native="createAccount" class="register__submit" :large="true" value="S'inscrire"/>
        </div>
    </section>
</template>
<script>
import Header from '../../components/Header.vue'
import Hero from '../../components/Hero.vue'
import Input from '../../components/inputs/Input.vue'
import Submit from '../../components/inputs/Submit.vue'
import PageMixin from '../../components/Page'
export default {
    mixins: [PageMixin],
    components: {
        Header,
        Hero,
        Input,
        Submit
    },
    data(){
        return {
            email:'',
            password:'',
            nom:'',
            prenom:''
        }
    },
    mounted(){
        this.$on('login',()=>{
            location.replace('/')
        })
    },
    methods: {
        createAccount(){
            axios.post('/createAccount',{
                email: this.email,
                password: this.password,
                nom: this.nom,
                prenom: this.prenom
            }).then(
                (success)=>{
                    if(document.referrer.includes('funnel')){
                        location.replace('/funnel')
                    }else{
                        location.replace('/')
                    }
                }
            )
        }
    }
}
</script>
<style>
    .register__wrapper {
        margin: 0 auto;
        display:table;
        margin-top: 20px;
    }
    .register__input {
        margin-bottom: 20px;
    }
    .register__submit {
        margin-top: 10px;
        margin-bottom: 30px;
    }
    @media (max-width: 960px) {
        .register__wrapper {
            margin-top:20%;
        }
    }
</style>

