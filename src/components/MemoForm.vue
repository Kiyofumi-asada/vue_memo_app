<template>
  <div class="new">
    <div><input type="text" v-model="title" /></div>
    <div><textarea v-model="content"></textarea></div>
    <div class="center"><button @click="save">保存</button></div>
  </div>
</template>

<script>
export default {
  name: 'MemoForm',
  props: ['memo'],
  data() {
    return {
      title: this.memo.title,
      content: this.memo.content,
    };
  },
  methods: {
    save() {
      //this.title -> data()をv-modelから取得
      let memo = {
        title: this.title,
        content: this.content,
      };
      //edit時はidで判別
      if (this.memo.id) memo.id = this.memo.id;

      //method commit -> mutations
      this.$store.commit('save', memo);
      //rootにリダイレクト
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
input[type='text'] {
  width: 100%;
}
textarea {
  width: 100%;
  height: 30em;
}
button {
  width: 5em;
  margin: 3px;
}
.center {
  text-align: center;
}
</style>
