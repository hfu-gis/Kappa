import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login_vue'
import HomePage from '../views/Home'
import Abo_anlegen from '../views/Abo_anlegen'
import abobearbeiten from "../views/abobearbeiten";
import Passwortvergessen from "../views/Passwortvergessen";
import Passwortfalsch from "../views/Passwortfalsch";
import Registrieren from "../views/Registrieren";

import HelloWorld from "../components/HelloWorld";
import Übersicht from "../views/Übersicht";

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
        {
            path: '/Passwortvergessen',
            component: Passwortvergessen
        },
        {
            path: '/Passwortfalsch',
            component: Passwortfalsch
        },
        {
            path: '/Registrieren',
            component: Registrieren
        },
        {
            path: '/Übersicht',
            component: Übersicht
        }
    ]
})