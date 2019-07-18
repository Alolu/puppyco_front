<template>
<div>
    <Header :loginRequired='true' :loggedOn="loggedOn"></Header>
    <Hero title="Votre commande">
        <Stepper></Stepper>
    </Hero>
    <section v-if="step == 1" class="step__first">
        <div class="register__wrapper">
            <label> Ville </label>
            <Input v-model="ville" :large="true" placeholder="Ville" class="register__input" />
            <label> Pays </label>
            <Input v-model="pays" :large="true" placeholder="Pays" class="register__input" />
            <label> Rue </label>
            <Input v-model="rue" :large="true" placeholder="Rue" class="register__input" />
            <label> Code postal </label>
            <Input v-model="cp" :large="true" placeholder="Code postal" class="register__input" />
            <Submit @click.native="step += 1" class="register__submit" :large="true" value="Confirmer"/>
        </div>
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

