<script setup>
import { productList } from './../ProductList/ProductList.js'

</script>

<template>
  <div>
    <ProductsPage v-for="product in productList" v-bind:key="product.id" :productData="product" />
  </div>
</template>
