const state = {
    user_info: {
      a:1,
      b:2
    }
};
const mutations = {
    setUserInfo(state, userInfo) {
        state.user_info = userInfo;
    }
};
const actions = {
    setUserInfo({ commit }, userInfo) {
        commit('setUserInfo', userInfo);
    }
};
export default {
    state,
    mutations,
    actions
};
