
import Vue from "vue";
import VueRouter from 'vue-router'
import home from '../components/login'
import index from '../components/index'
import searchTemp from '../components/searchTemp'

Vue.use(VueRouter)
const routes = [
    {
        path:"/",
        component: home
    },
    {
        path: "/index",
        component: index
    },
    {
        path: "/search",
        component: searchTemp
    }
]

var router =  new VueRouter({
    routes
})
export default router;