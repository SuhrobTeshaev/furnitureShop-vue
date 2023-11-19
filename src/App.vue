<script setup>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import Banner from './components/Banner/Banner.vue';
import Sale from './components/Sale/Sale.vue';
import Products from './components/Products/Products.vue';
import Feedback from './components/Feedback/Feedback.vue';

</script>
<template>
  <div class="container">
    <Header/>
    <Banner/>
    <Products/>
    <Feedback/>
    <Sale/>
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
/* .container {
  display: flex;
  flex-direction: column;
  width: 100%;
} */

</style>
