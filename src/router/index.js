import Vue from 'vue'
import VueRouter from 'vue-router'

import { LoginRoutes } from '@/modules/login/routes'
import { AuthorRoutes } from '@/modules/author/routes'
import HomePage from '@/pages/Home'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomePage
    },
    ...LoginRoutes,
    ...AuthorRoutes
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters['login/isUserConnected']) {
            next()
            return
        }
        next('/signin')
    } else {
        next()
    }
})

export default router
