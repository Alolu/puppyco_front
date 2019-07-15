<template>
<div class="product">
 <Header></Header>
    <div class="product">
    <img src="assets/img/products/test.png" class="product__img"/>
        <div class="product__info">    
            <span class="product__name">Le nom</span>
            <span class="product__desc">La description</span>
            <span class="product__price">15$</span>
        </div>
    </div>
</div>
</template>
<script>
import Header from '../../components/Header.vue'

export default {
    components: {
        Header,
    },
    data: function () {
        return {
            
        }
    }
}
</script>
<style>
.product {
    height:100%;
    width:100%;
    color: black;
}

.large {
   
}
.product__info {
display: inline-block;
border: 1px solid black; 
vertical-align: middle;
}
.product__info div {
display: inline-block;
vertical-align: middle; 
}

.product__name {
display: block;
text-align: center;   
}
.product__desc {
display: block;
text-align: center;    
}
.product__price {
display: block;
text-align: center;    
}
.product__img {
vertical-align: middle;
display: inline-block;
border: 1px solid black;  
margin: 2% 2%;
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

