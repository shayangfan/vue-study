<template>
  <div class="toast" v-show="show">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "toast",
    data() {
      return {
        show: false,
        message: ""
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 0;
    left: 50%;
    width: 30vw;
    margin-left: -15vw;
    font-size: 4vw;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;

  }

</style>
