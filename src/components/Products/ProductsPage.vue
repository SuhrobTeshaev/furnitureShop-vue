<script setup>
import   './Products.css'
import { productList } from './../ProductList/ProductList.js'

 
</script>

<template>
    <div class="products" >
        <!-- <div class="products_card">
       <h3>НОВИНКИ</h3> 
      </div> -->
      <router-link to="/product" class="product_cards">
      <div class="products_card" v-for="product in productList" :key="product.id">
              <img :src="product.image" :alt="product.title" />
              <p>{{ product.title }}</p>
              <span>{{ product.price }}</span>
            </div>
      </router-link>
    </div>
        
    
</template>