<template>
<div class="product">
 <Header></Header>
 <Layout></Layout>
    <div class="product">
    <img src="assets/img/products/test.png" class="product__img"/>
        <div class="product__info"> 
            <div >
                <span class="product__name">Le nom</span>
                <span class="product__desc">La description</span>
                <span class="product__price">15$</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Header from '../../components/Header.vue'
import Layout from '../../components/Layout.vue'

export default {
    components: {
        Header,
        Layout,
    },
    data: function () {
        return {
            
        }
    }
}
</script>
<style>
.product {
    display: block;
    color: white;
}

.large {
   
}
.product__info {
display: block;   
}
.product__info div {
display: block;   
}
.product__name {
display: block;
text-align: center;  
}
.product__desc {
display: block;  
}
.product__price {
display: block;   
}
.product__img {
display: block;
margin: 5% 20%; 
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
        width: 100%;
        height: 100%;
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

