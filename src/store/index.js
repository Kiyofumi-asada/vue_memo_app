import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0,
    memos: [],
  },
  getters: {
    getMemoList: (state) => {
      return state.memos;
    },
    getMemosLength: (state) => {
      return state.memos.length;
    },
  },
  mutations: {
    save(state, newMemo) {
      //countをidで保持
      newMemo.id = ++state.count;
      //配列に追加
      state.memos.unshift(newMemo);
    },
  },
  actions: {},
  modules: {},
});
