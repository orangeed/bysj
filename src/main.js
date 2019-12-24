import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from "axios"
import vuescroll from 'vuescroll';
//引用ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入组件
import routes from './js/router'
import store from "./js/store"

Vue.use(ElementUI);
Vue.use(VueRouter)
const router = new VueRouter({ mode: 'history', routes })
Vue.prototype.$axios = axios
Vue.prototype.$store = store
axios.defaults.baseURL = '/app'
// axios.interceptors.request.request(config => {
//   config.headers.common = {
//     'Content-Type': "application/x-www-form-urlencoded",
//   }
// })

//修改滚动条样式
Vue.use(vuescroll)
Vue.prototype.$vuescrollConfig = {
    vuescroll: {
        mode: 'native',//选择一个模式, native 或者 slide(pc&app)
        sizeStrategy: 'percent',//如果父容器不是固定高度，请设置为 number , 否则保持默认的percent即可
        detectResize: true//是否检测内容尺寸发生变化
    },
    scrollPanel: {
        initialScrollY: false,//只要组件mounted之后自动滚动的距离。 例如 100 or 10%
        initialScrollX: false,
        scrollingX: true,//是否启用 x 或者 y 方向上的滚动
        scrollingY: true,
        speed: 100,//多长时间内完成一次滚动。 数值越小滚动的速度越快
        easing: undefined,//滚动动画 参数通animation
        verticalNativeBarPos: 'right'//原生滚动条的位置
    },
    rail: {//轨道
        background: '#c3c3c3',//轨道的背景色
        opacity: 0,
        size: '6px',
        specifyBorderRadius: false,//是否指定轨道的 borderRadius， 如果不那么将会自动设置
        gutterOfEnds: null,
        gutterOfSide: '0px',//轨道距 x 和 y 轴两端的距离
        keepShow: false //是否即使 bar 不存在的情况下也保持显示
    },
    bar: {
        showDelay: 500,//在鼠标离开容器后多长时间隐藏滚动条
        onlyShowBarOnScroll: false,//当页面滚动时显示
        keepShow: false,//是否一直显示
        background: '#c3c3c3',
        opacity: 1,
        hoverStyle: false,
        specifyBorderRadius: false,
        minSize: false,
        size: '3px',
        disable: false,//是否禁用滚动条
  },// 在这里设置全局默认配置
  name: 'vuescroll' // 在这里自定义组件名字，默认是vueScroll
};


// 重写路由的push方法 
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

//对页面访问进行拦截
router.beforeEach((to, from, next) => {
  console.log("to===>",to)
  const meta = to.matched
  for (let i = 0; i < meta.length; i++) {
    const auth = meta[i].meta.auth;
    if (auth) {
      // 对路由进行验证
      if (store.state.isLoginsj) { // 已经登陆
        next() // 正常跳转到你设置好的页面
      } else {
        // 未登录则跳转到登陆界面
        // if(to.path ==="/admin"){
          
        // }
        next({ path: '/admin' })
      }
    } else {
      next()
    }
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
