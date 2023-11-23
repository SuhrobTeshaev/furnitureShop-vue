<script setup>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import HomePage from './components/Home/HomePage.vue';
import UProduct from './components/Products/UProduct.vue';

</script>
<template>
  <div class="container">
    <Header />
      <RouterView>
        <HomePage/> ||
        <UProduct/>
      </RouterView>   
    <Footer/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  background: #fff;
}

ul {
  list-style: none;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

</style>
