export const setUser = ({ commit }, user,goods,sjname) => {
    commit("userStatus", user)
    commit("goodsStatus",goods)
    commit("sjStatus",sjname)
}