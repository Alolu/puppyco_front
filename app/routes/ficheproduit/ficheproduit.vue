<template>
<div class="product">
	<Header></Header>
	<div class="content">
		<div class="col-1-2 product__img">
			<img class="imageProduit" src="/assets/img/products/test.png" img/>
		</div>
		
		<div class="col-1-2 product__info">				
            <h1 class ="produit__titre">{{product.titre}}</h1>
			<h2>{{product.prix}} €</h2>
			<h3>Description du produit</h3>
			<p>	{{product.description}} </p>
			
			<Submit value='Ajouter au panier' :no-width ="true" @click.native='ajouterPanier'></Submit>
			
			<div class='div__logo'>
			<h3 class="share">Share This</h3>
			<a href="" alt="facebook" class="share"><i class="fa fa-facebook"></i></a>
			<a href="" alt="twitter" class="share"><i class="fa fa-twitter"></i></a>
			<a href="" alt="Pinterest" class="share"><i class="fa fa-pinterest-p"></i></a>
			</div>
		</div>
	</div>
	
	<div class="also-like">
		<h3>You might also like...</h3>
		<div class="thumb-container">
			<a href="https://dribbble.com/shots/2054812-School?list=users&offset=0" class="thumb one"></a>
			<a href="https://dribbble.com/shots/2046950-Trophy?list=users&offset=2" class="thumb two"></a>
			<a href="https://dribbble.com/shots/2054812-School?list=users&offset=0" class="thumb three"></a>
			<a href="https://dribbble.com/shots/2046950-Trophy?list=users&offset=2" class="thumb four"></a>
		</div>
	</div>
</div>
</template>
<script>
import Header from '../../components/Header.vue'
import PageMixin from '../../components/Page';
import Submit from '../../components/inputs/Submit.vue'
export default {
    components: {
		Header,
		Submit
    },
    data: function () {
        return {
            
        }
    },
    mixin:[PageMixin],
    methods:{
        ajouterPanier(){
            axios.post('/addToPanier', this.product).then(
                (succes)=> {
                    (new Notyf()).confirm('Article ajouté au panier!');
                },
                (error)=>{
                    (new Notyf()).alert("Erreur lors de l'ajout au panier.");
                }
            )
        }
    }
}
</script>
<style>


.product{
	/*margin-bottom: 100px;*/
	width: 100%;
}

.content{
	/*background-color: #ddd;*/
	margin: 0 auto;
    margin-top: 100px;
	margin-bottom: 100px;
	width: 80%;
	height: 500px;
}

.col-1-2{
	float: left;
	width: 50%;
	height: 100%;
	color: #FF9A02;
	box-sizing: border-box;
}

.product__img{
	background-color: #f9f9f9;
	border: 1px dotted #ddd;
	overflow: hidden;
}

.product__img:hover .bg{
	transform: scale(1.05);
}

.produit__titre{
    margin-top: 100px;
}


p{
	color: #999;
	font-family: 'Libre Baskerville', 'Georgia' serif;
	font-size: 14px;
	line-height: 2;
}

p{
	margin-bottom: 20px;
}



h3.share, a.share{
	display: inline-block;
	margin-right: 20px;
}

a.share{
	color: #444;
}

.product__info{
	padding: 15px 50px 0px 75px;
}

.product__info p a{
	border-bottom: 1px dotted #999;
	color: #444;
	font-weight: 700;
	text-decoration: none;
}

.also-like{
	background-color: #f5f5f5;
	border-top: 1px solid #f1f1f1;
	padding: 50px 10%;
	width: 100%;
}

.also-like h3{
	margin-bottom: 30px;
}

.thumb-container{
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	margin-bottom: 30px;
	width: 100%;
}

.thumb{
	background-color: #fff;
	background-position: center center;
	background-size: cover;
	border: 1px solid #eee;
	width: 200px;
	height: 200px;
}

.thumb.one{
	background-image:url('https://d13yacurqjgara.cloudfront.net/users/37380/screenshots/2054812/school-02.jpg');
}

.thumb.two{
	background-image:url('https://d13yacurqjgara.cloudfront.net/users/37380/screenshots/2046950/trophy.jpg');
}

.thumb.three{
	background-image:url('https://d13yacurqjgara.cloudfront.net/users/37380/screenshots/2054812/school-02.jpg');
}

.thumb.four{
	background-image:url('https://d13yacurqjgara.cloudfront.net/users/37380/screenshots/2046950/trophy.jpg');
}

footer{
	background-color: #212121;
	width: 100%;
	padding: 20px 10% 10px 10%;
	text-align: center;
	vertical-align: middle;
}

footer img{
	display: inline-block;
	height: 20px;
	width: auto;
	margin-bottom: 10px;
	margin-right: 20px;
	vertical-align: middle;
}

.imageProduit{
	width: 100%;
	height: 100%;
}

footer h3{
	display: inline-block;
	height: 20px;
	margin-bottom: 0px;
	vertical-align: middle;
}

@media screen and (max-width: 960px) {
	 .col-1-2 {
	display:flex;
	flex-direction: column;
    width: 100%;
	height: auto;
  	}

  	.content {
	  height: none !important;
	  margin-top: 0 !important;
	  margin-bottom: 0 !important;
	  width: 100% !important;
	  
  	}

	.produit__titre{
	  margin-top: 0;
  	}

  	.also-like{
	  display:none;
  	}

  	.div__logo{
	display:flex;
	flex-direction: inline;
	margin-top: 5px;
  	}
}

</style>

