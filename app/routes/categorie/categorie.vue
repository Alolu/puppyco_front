<template>
    <section class="categorie">
        <Header :loggedOn="loggedOn"></Header>
        <Hero :title="categorie.libelle">
            <div class="categorie__choicePagination">
                Nb article: <span @click="changePagination(choice)" :key="i" v-for="(choice,i) in choices">{{ choice }} </span>
            </div>
            <div class="categorie__choicePage">
                <span @click=changePage(-1) v-if="page > 1"> precedent </span> {{ page }} <span @click=changePage(1) v-if="page < totalPage"> suivant </span>
            </div>
        </Hero>
        <div class="categorie__products">
        <Product :addPanier="true" :product="product" v-for="(product,i) in productList" :key="i"></Product>
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
            paginNumber: 20,
            page: 1,
            choices: [10,20,50]
        }
    },
    components: {
        Header,
        Product,
        Hero
    },
    methods: {
        changePage(direction){
            this.page += direction
        },
        changePagination(choix){
            this.paginNumber = choix
        }
    },
    computed: {
        productList(){
            return this.products.slice((this.page-1)*this.paginNumber,this.page*this.paginNumber)
        },
        totalPage(){
            return  Math.ceil(this.products.length/this.paginNumber)
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
</style>
