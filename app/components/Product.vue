<template>
    <div class="product" :class="{large: large}">
        <img src="assets/img/products/test.png" class="product__img"/>
        <div class="product__info"> 
            <div>
                <span class="product__name">{{ product.titre }}</span>
                <span class="product__desc">{{ product.description }}</span>
                <span class="product__price">{{ product.prix }}€</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        large: {
            type: Boolean,
            default: false
        },
        product : {
            type: Object
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

