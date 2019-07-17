<template>
<div>
    <Header :loginRequired='true' :loggedOn="loggedOn"></Header>
    <Hero title="Votre commande">
        <Stepper></Stepper>
    </Hero>
</div>
</template>
<script>
import Header from '../../components/Header.vue';
import Stepper from '../../components/Stepper.vue';
import Hero from '../../components/Hero.vue';
import PageMixin from '../../components/Page';
export default {
    components: {
        Header,
        Stepper,
        Hero
    },
    mixins:[PageMixin],
    data(){
        return {

        }
    }
}
</script>
<style>
.product {
    width: 25%;
    height: 45vh;
    position:relative;
    display:inline-block;
    color: white;
    cursor: pointer;
    padding: 0;
}
.product__action {
    position: absolute;
    bottom: 5%;
    right: 5%;
}
.large {
    height: 90vh;
}
.product__info {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top:0;
    transition: opacity 0s linear 300ms, opacity 300ms;
}
.product__info div {
    padding: 15px;
}
.product__name {
    display: block;
}
.product__desc {
    display: block;
}
.product__price {
    position: absolute;
    bottom: 5%;
}
.product__img {
    display: block;
    width: 100%;
    height: 100%;
}
@media(min-width: 960px){
    .product__info:hover {
        background-color: rgba(0, 0, 0, 0.534);
        opacity: 1;
        transition: opacity 0s linear 300ms, opacity 300ms;
    }
}
@media(max-width: 960px)
{  
    .product__info {
        opacity: 1;
    }
    .large {
        height: 350px;
    }
    .product {
        width: 50%;
        height: 350px;
    }

    .product__desc {
        display: none;
    }
    .product__img {
        filter:brightness(70%)
    }
}
@media(max-width: 360px){
    .product {
        width: 50%;
        height: 200px;
    }
}
</style>

