const state = {
    userInfo: {
        role: ['admin']
    },
    result: ''
};
const mutations = {
    inquireRole(state, role) {
        if (state.userInfo.role.includes(role)) {
            state.result = true;
        } else {
            state.result = false;
        }
    },
    inquireUserInfo(state, type) {
        if (type === 1) {
            state.userInfo.role[0] = 'admin';
        } else {
            state.userInfo.role[0] = 'admin1';
        }
    }
};
const actions = {
    setResult({ commit }, result) {
        commit('inquireRole', result);
    },
    setUserInfo({ commit }, result) {
        commit('inquireUserInfo', result);
    }
};
export default {
    state,
    mutations,
    actions
};
