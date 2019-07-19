<template>
    <section class="header">
    <nav class="nav">
        <h1 @click="goToHome()" class="nav__title"> PuppyCo'</h1>
        <img @click="goToHome()" class="nav__logo" src="/assets/img/logo.svg">
        <ul class="nav__links__container" :class="{forced: forcedModal}">
            <li class="nav__link">
                <a href="/panier" class="modal__ici" ><img src="/assets/img/caddie.png" alt="logo"></a>
            </li>
            <li class="nav__link link_1">
                <Dropdown title="Catégorie" :fields="categories"></Dropdown>
            </li>
            <li v-if="!loggedOn" class="nav__link link_2">
                <Modal :forced="forcedModal" title="Se connecter">
                    <div class="modal__flex">
                        <div class="modal__box">
                            <h3 class="header__title"> Se connecter </h3>
                            <h5 v-if="loginRequired"> 
                                Pour continuer vos achats, veuillez vous connecter ou vous 
                                <a href="/inscription" class="modal__ici">
                                    inscrire
                                </a>
                            </h5>
                            <div class="header__input"><Input v-model="username" :large="true" type="text" placeholder="Login" /></div>
                            <div class="header__input"><Input v-model="password" :large="true" type="password" placeholder="Password" /></div>
                            <Submit class="header__submit" :large="true" @click.native="logClient" />
                            <div class="header__register">Pas de compte ? Vous pouvez vous inscrire <a href="/inscription" class="modal__ici">ici</a></div>
                        </div>
                    </div>    
                </Modal>
            </li>
            <li v-else class="nav__link link_2">
                <a @click="logoutClient" >Se déconnecter</a>
            </li>
            <li class="nav__link link_3">
                <Input v-model="produitRecherche" @keyup.enter.native="rechercheProduit" placeholder="Rechercher..." :large="true" />
            </li>
        </ul>
        <div class="nav__toggle">
            <input class='nav__hamburger' type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul class="nav__menu">
                <li><a href="/panier">Panier</a><li>
                <Dropdown title="Catégorie" :fields="categories"></Dropdown>
                <li @click="logoutClient" v-if="loggedOn"> Deconnexion </li> 
                <div v-if="!loggedOn">
                    <a href="/inscription"><li>S'inscrire</li></a>
                    <li> Connexion </li>
                    <li><Input v-model="username" type="text" placeholder="Login" /></li>
                    <li><Input v-model="password" type="password" placeholder="Password" /></li>
                    <li><Submit @click.enter.native="logClient" /></li>
                </div>
                <div class='search_product'>
                <li> Rechercher </li>
                <li><Input v-model="produitRecherche" @keyup.native="rechercheProduit" placeholder="Rechercher..." /></li>
                </div>
            </ul>
        </div>
    </nav>
    <div class="spacer"></div>
    </section>
</template>

<script>
import Input from './inputs/Input.vue'
import Submit from './inputs/Submit.vue'
import Modal from './Modal.vue'
import Dropdown from './Dropdown.vue'
export default {
    name: 'Header',
    components: {
        Input,
        Modal,
        Submit,
        Dropdown
    },
    data: function () {
        return {
            username: '',
            password: '',
            categories: null,
            produitRecherche: ''
        }
    },
    computed: {
        forcedModal(){
            if(this.loginRequired && !this.loggedOn) return true
            return false
        }
    },
    props: ["loggedOn","loginRequired"],
    methods: {
        logClient(){
            axios.post('/login',{
                username: this.username,
                password: this.password
            }).then((resp)=>{
                this.$root.$emit('login')
            })
        },
        logoutClient(){
            axios.get('/logout').then((resp)=>{
                this.$root.$emit('logout')
            })
        },
        goToHome(){
            location.replace('/')
        },
        getCategories(){
            axios.get('/getCategories').then((success)=>{
                this.categories = success.data
            })
        },
        rechercheProduit(){
            location.replace('/recherche/' + this.produitRecherche)
        }
    },
    mounted(){
        this.getCategories()
    }
}
</script>

<style>
    .spacer {
        width: 100%;
        height: 100px;
    }
    .modal__ici {
        color: #ffca37a8;
        text-decoration: underline;
        padding-bottom: 5px;
    }
    .header__register {
        margin-top: 10px;
        font-size: 0.6em;
    }
    .modal__flex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: center;
    }
    .modal__box {
        width: 300px;
        margin: 0 auto;
        text-align: center;
    }
    .header__submit {
        margin-top: 20px;
    }
    .header__input {
        display:inline-block;
        margin-top: 15px;
    }
    .nav__links__container{
        list-style-type: none;
        margin: 0;
        padding: 0;
        display:inline
    }
    .link_3 {
        margin-top: 0 !important;
    }
    .nav__link {
        float: left;
        display: block;
        text-align: center;
        padding-right: 20px;
        margin-top: 10px;
        color:#FF9A02;
        text-decoration: none;
        font-family: Varta-Regular;
    }

    .nav__toggle {
        display: none;
    }

    .nav__logo {
        width: 80px;
        display: none;
        text-align: center;
        position: absolute;
        left: 50%;
        margin-left: -40px;
    }

    .nav__title {
        display:inline-block;
        margin-left: 15px;
        font-size: 1.5em;
        vertical-align: middle;
        font-family: Varta-Bold;
        color: #FF9A02;
    }

    .nav__contenu {
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
    }

    .nav {
        justify-content: space-between;
        display:flex;
        width: 100%;
        height: 100px;
        position: fixed;
        background-color: white;
        box-shadow: 0px 10px 25px rgba(0,0,0,0.25);
        align-items: center;
        z-index: 500;
    }
    
    @media(max-width: 960px){
        .nav {
            justify-content: space-between
        }
        .nav__links__container {
            display: none;
        }
        .nav__logo {
            display:block;
        }

        a
        {
        text-decoration: none;
        color: #232323;
        font-family: Varta-Regular;
        transition: color 0.3s ease;
        }

        a:hover
        {
        color: tomato;
        }

        .nav__toggle
        {
        display: block;
        position: fixed;
        top: 40px;
        right: 15px;
        
        z-index: 6;
        
        -webkit-user-select: none;
        user-select: none;
        }

        .nav__toggle .nav__hamburger
        {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        
        cursor: pointer;
        
        opacity: 0; /* hide this */
        z-index: 7; /* and place it over the hamburger */
        
        -webkit-touch-callout: none;
        }

        /*
        * Just a quick hamburger
        */
        .nav__toggle span
        {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        
        background: #FF9A02;
        border-radius: 3px;
        
        z-index: 6;
        
        transform-origin: 4px 0px;
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
        }

        .nav__toggle span:first-child
        {
        transform-origin: 0% 0%;
        }

        .nav__toggle span:nth-last-child(2)
        {
        transform-origin: 0% 100%;
        }

        /* 
        * Transform all the slices of hamburger
        * into a crossmark.
        */
        .nav__toggle .nav__hamburger:checked ~ span
        {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #FF9A02;
        }

        /*
        * But let's hide the middle one.
        */
        .nav__toggle .nav__hamburger:checked ~ span:nth-last-child(3)
        {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
        }

        /*
        * Ohyeah and the last one should go the other direction
        */
        .nav__toggle .nav__hamburger:checked ~ span:nth-last-child(2)
        {
        opacity: 1;
        transform: rotate(-45deg) translate(0, -1px);
        }

        /*
        * Make this absolute positioned
        * at the top left of the screen
        */
        .nav__menu
        {
        position: absolute;
        width: 300px;
        margin: 30px 0 0 0;
        padding: 40px;
        right: -100px;
        background: #ffffff;
        list-style-type: none;
        box-shadow: -15px 15px 25px rgba(0,0,0,0.25);
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */
        
        transform-origin: 0% 0%;
        transform: translate(100%, 0);
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        }

        .nav__menu li
        {
        padding: 10px 0;
        font-size: 22px;
        }

        /*
        * And let's fade it in from the left
        */
        .nav__toggle .nav__hamburger:checked ~ ul
        {
        transform: scale(1.0, 1.0);
        opacity: 1;
        }
        .forced {
            display:block;
        }
    }
</style>

