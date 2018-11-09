const state = {
    userInfo: {
        role: ['admin', 'see', 'set']
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
    }
};
const actions = {
    setResult({ commit }, result) {
        commit('inquireRole', result);
    }
};
export default {
    state,
    mutations,
    actions
};
