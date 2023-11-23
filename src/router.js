import {createRouter,createWebHashHistory} from 'vue-router';
import UProduct from './components/Products/UProduct.vue';
import HomePage from './components/Home/HomePage.vue'
import Cart from './components/Cart/Cart.vue'
export default createRouter({
        history:createWebHashHistory(),
        routes:[
            {path:'/product',component:UProduct },
            {path:'/home',component:HomePage },
            {path:'/cart',component:Cart }
        
    ]
    })