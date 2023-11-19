import { createApp } from 'vue'
// import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Products from './components/Products/Products.vue';

const app = createApp(App)
// const router = createRouter({
//     history:createWebHashHistory(),
//     routes:[{
//         name:'Products',
//         path:'/PRODUCTS',
//         component:Products
//     }]
// })
// .use(router)
app.mount('#app')
