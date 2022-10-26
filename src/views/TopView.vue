<template>
  <div class="top">
    <ul v-if="hasMemos">
      <li v-for="memo in memoList" :key="memo.id">
        {{ memo.title }}
      </li>
    </ul>
    <p v-else>メモを追加してください</p>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>
<script>
export default {
  name: 'TopView',
  //computed:storeのgettersに定義したロジックからstateの値を取得
  computed: {
    memoList() {
      return this.$store.getters.getMemoList;
    },
    hasMemos() {
      return this.$store.getters.getMemosLength;
    },
  },
};
</script>
