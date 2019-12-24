//更改用户的状态信息
const mutatuons = {
    userStatus(state, user) {
        if (user) {
            state.currentUser = user
            state.isLogin = true
        } else if (user == null) {
            //退出登录收，清空localStorage里面的东西
            localStorage.setItem("username", null);
            state.currentUser = null;
            state.isLogin = false;
        }
    },
    goodsStatus(state, goods) {
        if (goods) {
            state.havegoods = true
        } else {
            state.havegoods = false
        }
    },
    sjStatus(state, sjname) {
        if (sjname) {
            state.isLoginsj = true
        } else {
            state.isLoginsj = false
        }
    }
}
export default mutatuons