import { createStore } from 'vuex';
import { VuexPersistence } from 'vuex-persist';

//localstrageに保存
const vuexPersist = new VuexPersistence({
  storage: localStorage,
});

export default createStore({
  state: {
    count: 0,
    memos: [],
  },
  getters: {
    getMemosLength: (state) => {
      return state.memos.length;
    },
    getMemoList: (state) => {
      return state.memos;
    },
    getMemoById: (state) => (id) => {
      return state.memos.find((memo) => (memo.id = id));
    },
  },
  mutations: {
    //localStorage state保持
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    //保存
    save(state, newMemo) {
      //編集
      if (newMemo.id) {
        let editMemoState = state.memos.find((memo) => memo.id === newMemo.id);
        editMemoState.title = newMemo.title;
        editMemoState.content = newMemo.content;
      } else {
        //countをidで保持
        newMemo.id = ++state.count;
        //配列に追加
        state.memos.unshift(newMemo);
      }
    },
    delete(state, id) {
      //指定したidを除くようにfilterし配列を更新
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin],
});
