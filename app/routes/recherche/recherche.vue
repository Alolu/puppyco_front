<template>
    <section class="categorie">
        <Header :loggedOn="loggedOn"></Header>
        <Hero :title="Recherche"><Input placeholder="recherche"/></Hero>

        <div class="recherche__products">
        
        <Product :addPanier="true" :product="product" v-for="(product,i) in products" :key="i"></Product>
        </div>
    </section>
</template>
<script>
import Header from '../../components/Header.vue'
import Product from '../../components/Product.vue'
import PageMixin from '../../components/Page';
import Hero from '../../components/Hero.vue'
export default {
    data: function(){
        return {
           
        }
    },
    components: {
        Header,
        Product,
        Hero
    },
    methods: { 
    },
    mixins:[PageMixin]
}
</script>
<style>
    
    
    .categorie__products {
        width:100%;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }
</style>
