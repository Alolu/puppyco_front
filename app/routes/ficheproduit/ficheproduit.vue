<template>
<div class="product">
 <Header></Header>
    <div class="product" :class="{large: large}">
        <img src="assets/img/products/test.png" class="product__img"/>
        <div class="product__info"> 
            <div>
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
    width: 100%;
    height: 50vh;
    position:static;
    display:block;
    color: white;
    cursor: pointer;
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
    position: absolute;
    top: 40%; left: 40%;
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

