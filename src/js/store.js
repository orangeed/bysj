import Vue from "vue";
import Vuex from 'vuex';
import * as getters from "./getters.js";
import mutations from "./mutations.js"
import * as actions from "./actions.js"

Vue.use(Vuex)
//记录点击后的goodsStr，需要对其进行数据的持久化，安装插件，在goods页面加载的时候，调用goodsStr的值，为了增加用户体验，减少请求次数，所以在goods的mounted中判断havagoods，无则请求，并添加到缓存中，有则读取缓存数的数据
export default new Vuex.Store({
    //定义状态
    state: {
        currentUser: null,
        isLogin: false,
        isLoginsj:false,
        havegoods: false,
        goodsStr: ""
    },
    getters,
    mutations,
    actions
})