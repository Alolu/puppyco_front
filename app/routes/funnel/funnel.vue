<template>
<div>
    <Header :loginRequired='true' :loggedOn="loggedOn"></Header>
    <Hero title="Votre commande">
        <Stepper></Stepper>
    </Hero>
    <section v-if="step == 1" class="step__first">
        <table class="register__wrapper">
            <tr><td><label> Ville </label>
            <Input v-model="ville" :large="true" placeholder="Ville" class="register__input" />
            <label> Pays </label></td></tr>
            <Input v-model="pays" :large="true" placeholder="Pays" class="register__input" />
            <tr><label> Rue </label>
            <Input v-model="rue" :large="true" placeholder="Rue" class="register__input" />
            <label> Code postal </label></tr>
            <tr><Input v-model="cp" :large="true" placeholder="Code postal" class="register__input" />
            <Submit @click.native="step += 1" class="register__submit" :large="true" value="Confirmer"/></tr>
        </table>
    </section>
    <section v-if="step == 2" class="step__second">
        <table class="step__table">
            <thead>
                <td> Nom du produit </td>
                <td> Quantité commandée </td>
                <td> Prix </td>
            </thead>
            <tr v-for="(product,i) in products" :key="i">
                <td> {{ product.titre }} </td>
                <td> {{ product.qte }} </td>
                <td> {{ product.prix * product.qte }}€ </td>
            </tr>
        </table>
        <h3> Le total est de : {{ calculateTotal }}€ </h3>
        <!-- formulaire qui permet de choisir le moyen de paiement-->
        <div class="moyen_paiement">
            <table class="forme__paiement">
                <tr><td><img src="../../assets/img/Logo_CB.png" alt="image"/></td>
                <td><Input type="checkbox" name="Carte Bancaire" id="carte__bancaire" value="carte__bancaire" v-model="checkedPayment"/></td>
                <td><label for="CB">Carte bancaire</label></td></tr>
                <tr><td><img src="../../assets/img/virement.png" alt="image" value=""/></td>
                <td><Input type="checkbox" name="Virement bancaire" id="virement" value="virement" v-model="checkedPayment"/></td>
                <td><label for="virement">Virement bancaire</label></td></tr>
                <tr><td><img src="../../assets/img/Paypal.png" alt="image" value="paypal"/></td>
                <td><Input type="checkbox" name="Paypal" id="paypal" v-model="checkedPayment"/></td>
                <td><label for="Paypal">Paypal</label></td></tr>
            </table>  
            </div>      
        <Submit value="Confirmer"/>
    </section>
</div>
</template>
<script>
import Header from '../../components/Header.vue';
import Stepper from '../../components/Stepper.vue';
import Hero from '../../components/Hero.vue';
import Input from '../../components/inputs/Input.vue';
import Submit from '../../components/inputs/Submit.vue';
import PageMixin from '../../components/Page';
export default {
    components: {
        Header,
        Stepper,
        Hero,
        Input,
        Submit
    },
    mixins:[PageMixin],
    data(){
        return {
            step: 2,
            totalPrice: 0
        }
    },
    computed:{
        calculateTotal(){
            this.totalPrice = 0
            this.products.forEach(element => {
                this.totalPrice += element.prix * element.qte
            });
            return this.totalPrice
        }
    }
}
</script>
<style>
.moyen_paiement{
position: relative;
text-align: -webkit-center;
border: solid 1px;
color : orange;
padding-top:2%;
padding-bottom:2%;
margin-left:30%;
margin-top:5%;
margin-right:30%;
vertical-align: middle!important;

}

forme__paiement.label {
width: 20%;
position: relative;
display: inline-block;   
}

img {
width: 50px;
height: 50px;
}
.register__wrapper {
    margin: 0 auto;
    display:table;
    margin-top: 20px;
}
.register__input {
    margin-bottom: 20px;
}
.register__submit {
    margin-top: 10px;
    margin-bottom: 30px;
}

.step__table {
    margin: 0 auto;
    margin-top: 15px;
    border-spacing: 0;
    text-align: center;
}
.step__table td {
    padding: 8px;
    border-bottom: 1px solid orange
}
.step__second {
    text-align: center;
}
@media (max-width: 960px) {
    .register__wrapper {
        margin-top:20%;
    }
}
</style>

