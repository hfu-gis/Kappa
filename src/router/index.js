import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login_vue'
import HomePage from '../views/Home'
import Abo_anlegen from '../views/Abo_anlegen'
import abobearbeiten from "../views/abobearbeiten";

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
        {
            path: '/Abo_anlegen',
            component: Abo_anlegen
        },
        {
            path: '/abobearbeiten',
            component: abobearbeiten
        },
    ]
})
