<script>
import './Cart.css'
import { ref } from 'vue';

export default {
    setup() {
        const number = ref(0);
        function increment(){
            number.value++;
        }
        function dicrement(){
            number.value--;
        }
        return {number, increment, dicrement};

    },
};

</script>

<template>
    <div class="cart" >
        <h3>Корзина</h3>
       <div class="cart_card">
        <div class="cart_img">
            <img src="./../../img/oblako.png" alt="#">
        </div>
        <div class="cart_quantity">
            <span class="minus" @click="dicrement">
                -
            </span>
            <span class="count">
            {{ number }}
            </span>
            <span class="plus" @click="increment">
                +
            </span>
        </div>
        <div class="close">
            x
        </div>
       </div> 
    </div>
</template>