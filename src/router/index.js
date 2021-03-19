import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Home from '@/views/PanelAdmin/pages/Home'
import ThemeColor from "@/views/PanelAdmin/pages/ThemeColor";
import ThemeBanner from "@/views/PanelAdmin/pages/ThemeBanner";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/admin',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/tema-cor',
    name: 'ThemeColor',
    component: ThemeColor
  },
  {
    path: '/admin/tema-banner',
    name: 'ThemeBanner',
    component: ThemeBanner
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/PanelAdmin/pages/Home')
  },
  {
    path: '/admin/tema-cor',
    name: 'ThemeColor',
    component: () => import('../views/PanelAdmin/pages/ThemeColor')
  },
  {
    path: '/admin/tema-banner',
    name: 'ThemeBanner',
    component: () => import('../views/PanelAdmin/pages/ThemeBanner')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
