<template>
    <div class="products">
        <Header :loggedOn="loggedOn"></Header>
        <div class="product_container">
        <Product :product="product" :large='i == 2 || i == 5' v-for="(product,i) in products" :key='i'></Product>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Product from '../../components/Product.vue'
import PageMixin from '../../components/Page';
export default {
    components: {
        Header,
        Product
    },
    data: function () {
        return {
            
        }
    },
    mixins: [PageMixin],
}
</script>
<style>
.product_container {
        width:100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }
@media(max-width: 960px){
    .product_container {
        height: auto;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .product {
        width: 50%;
    }
}
</style>
