<template>
  <!-- propsを定義したため、新規作成では空の値を渡す -->
  <MemoForm memo="" />
</template>

<script>
import MemoForm from '@/components/MemoForm.vue';
export default {
  name: 'MemoView',
  components: { MemoForm },
};
</script>
