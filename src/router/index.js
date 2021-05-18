import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Home from '@/views/PanelAdmin/pages/Home'
import ThemeColor from "@/views/PanelAdmin/pages/ThemeColor";
import ThemeBanner from "@/views/PanelAdmin/pages/ThemeBanner";
import LoginComponent from "../views/PanelAdmin/LoginComponent";

Vue.use(VueRouter)

// Authorization for access routes
function AuthorizationAdmin(to, from, next){
    var isAuthenticated;
    var isAdmin = 'admin';

    localStorage.getItem('token') ? isAuthenticated = true: isAuthenticated = false
    isAdmin === 'admin' ? isAdmin = true: isAdmin = false

    if(isAuthenticated === true && isAdmin === true){
        next();
    }else{
        next('/login');
    }
}

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/login',
        name: 'Home',
        component: LoginComponent
    },
    {
        path: '/admin',
        name: 'Home',
        component: Home,
        beforeEnter: AuthorizationAdmin
    },
    {
        path: '/admin/tema-cor',
        name: 'ThemeColor',
        component: ThemeColor,
        beforeEnter: AuthorizationAdmin
    },
    {
        path: '/admin/tema-banner',
        name: 'ThemeBanner',
        component: ThemeBanner,
        beforeEnter: AuthorizationAdmin
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
