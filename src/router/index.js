import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login_vue'
import HomePage from '../views/Home'
import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: HomePage
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
