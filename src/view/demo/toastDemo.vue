<template>
  <div>
    <button @click="toast">显示taost弹出框</button>
  </div>
</template>

<script>
  export default {
    name: "toast",
    methods: {
      toast() {
        this.$toast("你好");
      }
    }
  }
</script>

<style scoped>

</style>
