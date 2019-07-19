<template>
    <div>
        <Header :loggedOn="loggedOn"></Header>
        <Hero title="Mon panier"></Hero>
        <div class="product__none" v-if="products.length == 0">
            <h1> Vous n'avez aucun produit dans le panier ! </h1>
        </div>
        <div v-else id="my-cart">
        <h2>Nombre d'articles</h2>
        <span id="prod"><h2>{{ products.length}}</h2></span>
        <div id="cart-list">
            <ul>
            <li v-for="(product,i) in products" :key="i">
                <h3 class="prod-name">{{ product.id }} - {{ product.titre }}</h3>
                <div class="produit__img">
                    <img src="/assets/img/products/test.png">
                </div>
                <h3 class="price">{{ product.prix * product.qte }}</h3>
                <p>{{ product.description}}</p>
                <div class="produit__quantity">
                    <span @click="changeQte(-1,i)" class="produit__button produit__remove"> - </span>
                    <span> {{ product.qte }} </span>
                    <span @click="changeQte(1,i)" class="produit__button produit__add"> + </span>
                </div> 
                <Submit @click.native="deleteProduct(product.id)" class="produit__delete" value="Supprimer" />
            </li>
            <li class="total">
                <h3 class="grand-total">Total (EUR)</h3>
                <h3 class="price">{{ calculateTotal }}€</h3>
            </li>
            </ul>
                <div class="produit__submit"> 
                    <Submit @click.native="goToFunnel" value="Commander" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PageMixin from '../../components/Page'
import Header from '../../components/Header.vue'
import Hero from '../../components/Hero.vue'
import Product from '../../components/Product.vue'
import Input from '../../components/inputs/Input.vue'
import Submit from '../../components/inputs/Submit.vue'
export default {
    components:{
        Header,
        Hero,
        Product,
        Input,
        Submit
    },
    data(){
        return {
            
        }
    },
    methods:{
		changeQte(direction,i){
            if(this.products[i].qte > 1 && direction == -1) this.products[i].qte += direction;
            if(this.products[i].qte < this.products[i].stock && direction == 1) this.products[i].qte += direction;
            axios.post('/editPanier',{
                id: this.products[i].id,
                qte: this.products[i].qte
            }).then(
                (success) => {
                    console.log('ok')
                }
            )
        },
        deleteProduct(id){
            axios.get('/deletePanier/'+id).then((success)=>{
                this.products = success.data
            })
        },
        goToFunnel(){
            location.replace('/funnel')
        }
    },
    computed: {
        calculateTotal(){
            this.totalPrice = 0
            this.products.forEach(element => {
                this.totalPrice += element.prix * element.qte
            });
            return this.totalPrice
        }
    },
    mixins: [PageMixin]
}
</script>
<style>
.product__none {
    display: inline;
    margin: 0 auto;
}

.produit__img {
    height: 200px;
}
.produit__img img {
    width: 100%;
    height: 100%;
}
.promo p {
  text-transform: uppercase;
}

#promo-code {
  font: helvetica, arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #808b96;
}

.produit__quantity {
    display:inline-block;
}
button {
  color: white;
  font: helvetica, arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.prod h2 {
  color: white;
}

.produit__submit {
    text-align: center;
    margin-bottom: 10px;
}

.prod:before {
  content: "";
  display: block;
  background: #808b96;
  width: 10px;
  height: 10px;
  border-radius: 10px;
}

h2 {
  display: inline-block;
  margin-left: 5%;
}

#prod {
  float: right;
  margin-right: 10%;
}

#cart-list {
  width: 90%;
  height: 72%;
  margin: auto;
  border: 2px solid gray;
  border-radius: 5px;
  background: white;
}

#cart-list ul {
  list-style: none;
  padding-left: 10%;
  padding-right: 10%;
}

#cart-list li:not(.total) {
  border-bottom: 2px solid gray;
}

#cart-list h3 {
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 5px;
}

.price {
  float: right;
  text-align: right;
}

p {
  margin-top: 5px;
  margin-bottom: 20px;
}

#redeem {
  margin-top: 5%;
  margin-left: 5%;
  width: 90%;
  position: relative;
}

#promo-code {
  width: 70%;
  padding-left: 10%;
  height: 50px;
  border: 2px solid gray;
  border-radius: 5px;
}

#button {
  position: absolute;
  width: 30%;
  height: 56px;
  right: -4px;
  top: 0px;
  border: 2px solid gray;
  border-radius: 0 5 5 0;
  background: #808b96;
}

</style>
