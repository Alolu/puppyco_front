<template>
    <li class="dropdown">
        {{ title }}
      <ul>
        <li v-for="(field,i) in fields" :key="i"><a :href="'/categorie/'+field.id">{{ field.libelle }}</a></li>
      </ul>
    </li>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props: ["title","fields"]
}
</script>

<style>
.dropdown {
  cursor: pointer;
  position: relative;
}

.dropdown ul {
  list-style-type: none;
  position: absolute;
  width: 100%;
  left: -9999em;
}

.dropdown:hover ul {
  left: 0;
}

.dropdown ul li {
  padding: 0;
  cursor: default;
  text-align: left;
}

.dropdown ul li a:hover {
    transform: scale(1.2)
}


/*== Letakkan kode transisi disini ==*/

.dropdown ul li a {
  color: #FF9A02;
  display: block;
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 0;
  -moz-transition: 0.2s ease;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}


/*== Hover li induk dan akan muncul efek transisinya ==*/

.dropdown:hover ul li a {
  padding: 5px;
  text-decoration: none;
}
</style>
