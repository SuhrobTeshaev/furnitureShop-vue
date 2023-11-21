import {createRouter,createWebHashHistory} from 'vue-router';
import Product from './components/Products/Product.vue';
import HomePage from './components/Home/HomePage.vue'
import Cart from './components/Cart/Cart.vue'
export default createRouter({
        history:createWebHashHistory(),
        routes:[
            {path:'/product',component:Product },
            {path:'/home',component:HomePage },
            {path:'/cart',component:Cart }
        
    ]
    })