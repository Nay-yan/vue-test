import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

// Router 
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/cart"
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/products",
        name: "products",
        component: Products,
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')