<template>
    <header class="hero__entete">
        <h1 class="hero__titre">{{ title }}</h1>
        <slot></slot>
    </header>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:['title']
}
</script>

<style>
    .hero__titre{
        display:block;
        font-size: 2em;
    }
    .hero__entete {
        color:white;
        padding: 10px;
        text-align:center;
        background-color: #ffca37a8 
    }
</style>
