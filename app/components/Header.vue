<template>
    <nav class="nav">
        <h1 class="nav__title"> PuppyCo'</h1>
        <img class="nav__logo" src="assets/img/logo.svg">
        <ul class="nav__links__container">
            <li class="nav__link link_1"><a>Categories</a></li>
            <li class="nav__link link_2"><a>Se connecter</a></li>
            <li class="nav__link link_3"><Input type="text" placeholder="Rechercher..." :large="true" /></li>
        </ul>
        <div class="nav__toggle">
            <input class='nav__hamburger' type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul class="nav__menu">
                <a href="#"><li>Categories</li></a>
                <a href="#"><li>S'inscrire</li></a>
                <li> Connexion </li>
                <li><Input type="text" placeholder="Login" /></li>
                <li><Input type="password" placeholder="Password" /></li>
                <li> Rechercher </li>
                <li><Input type="text" placeholder="Rechercher..." /></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import Input from './inputs/Input.vue'
export default {
    name: 'Header',
    components: {
        Input
    },
    data: function () {
        return {}
    }
}
</script>

<style>
    .nav__links__container{
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
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
    }
    .nav__link a {
        color:#FF9A02;
        text-decoration: none;
        font-family: Varta-Regular;
    }

    .nav__toggle {
        display: none;
    }

    .nav__logo {
        width: 80px;
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
        .nav__links, .nav__links__container, .nav__link {
            display: none;
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
    }
</style>

