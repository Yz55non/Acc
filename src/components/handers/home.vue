<template>
  <div class="main">
    <v-hander></v-hander>
    <router-view></router-view>
    <v-foot></v-foot>
  </div>
</template>
<script>
  import hander from "../../components/handers/hander";
  import foot from "../../components/handers/foot";

  export default {
    components: {
      'v-hander': hander,
      'v-foot': foot,
    },
    name: 'index',
  }
</script>
<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  body {
    display: block;
    background-color: #F5F5F5;
    width: 100%;
    height: 100%;
  }

</style>

