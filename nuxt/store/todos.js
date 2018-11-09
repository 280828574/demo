export const state = () => ({
  list: 1
});

export const mutations = {
  add (state, text) {
    state.list = text
  }
};
