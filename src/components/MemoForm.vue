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
  //v-model ->双方向バインド
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    save() {
      //this.title -> data()をv-modelから取得
      let memo = {
        title: this.title,
        content: this.content,
      };
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
