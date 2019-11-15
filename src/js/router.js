// import Router from "../components/router.vue"
import Index from "../components/index.vue"
import Fruit from "../components/fruit.vue"


export default [
    {
        path: '/', //首页
        component: Index,
    },
    {
        path:"/fruit",//生鲜水果
        component:Fruit
    }
]
