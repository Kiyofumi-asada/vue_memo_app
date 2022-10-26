<!-- :memo="memo" props:computed.memo -->
<template>
  <MemoForm v-if="memo" :memo="memo" />
  <p v-else>指定のメモがありません</p>
</template>

<script>
import MemoForm from '@/components/MemoForm.vue';
export default {
  name: 'EditView',
  components: { MemoForm },
  computed: {
    memo() {
      const memoId = Number(this.$route.params.id);
      return this.$store.getters.getMemoById(memoId);
    },
  },
};
</script>
