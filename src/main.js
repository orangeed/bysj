import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//引用ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入组件
import routes from './js/router'

Vue.use(ElementUI);
Vue.use(VueRouter)
const router = new VueRouter({ mode: 'history', routes })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
