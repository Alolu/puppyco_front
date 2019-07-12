<template>
    <div class="products">
        <Layout></Layout>
        <div class="product_container">
        <Product :large='product.large' v-for="(product,i) in products" :key='i'></Product>
        </div>
    </div>
</template>

<script>
import Layout from '../../components/Layout.vue'
import Product from '../../components/Product.vue'
export default {
    components: {
        Layout,
        Product
    },
    data: function () {
        return {
            
        }
    }
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
