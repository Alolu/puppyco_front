<template>
    <section class="categorie">
        <Header :loggedOn="loggedOn"></Header>
        <Hero :title="Recherche"><Input class="affinerRecherche" v-model="selectionProduit" @keyup.enter.native="affinerRecherche" placeholder="Affinez votre recherche"/></Hero>
            
        <div class="recherche__products">
        <Product :addPanier="true" :product="product" v-for="(product,i) in products" :key="i"></Product>
        </div>
    </section>
</template>
<script>
import Header from '../../components/Header.vue'
import Product from '../../components/Product.vue'
import PageMixin from '../../components/Page'
import Hero from '../../components/Hero.vue'
import Submit from '../../components/inputs/Submit.vue'
import Input from '../../components/inputs/Input.vue'
export default {
    data: function(){
        return {
            selectionProduit: '' 
        }
    },
    components: {
        Header,
        Product,
        Hero,
        Input
    },
    methods: {
             affinerRecherche(){
                 axios.get("/rechercheavancee/" + this.selectionProduit).then((success)=>{
                     this.products = success.data
                 })
             }
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

    .affinerRecherche {
        width: 280px!important;
        text-align:center;
    }
</style>
