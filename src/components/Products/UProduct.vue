<script setup>
import './Products.css'

const props = defineProps({
    product:{
        type:Object,
        required:true
    }
});
console.log(props.product);

</script>

<template>
    <div class="product">
        <h1>Product</h1>
        <div class="product_card">
            <div class="product_img">
                <img src="./../../img/smerk.png" alt="maya">
            </div>
            <div class="product_info">
                <div class="product_title">Стуль офисный</div>
                <div class="prodict_price"></div>
               <a href="#/cart">
                <button>Add to cart</button>
               </a> 
            </div>
            
        </div>
    </div>
</template>