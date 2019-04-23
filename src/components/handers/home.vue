<template>
  <div class="main">
    <!--<v-hander></v-hander>-->
    <router-view></router-view>
    <!--<v-foot></v-foot>-->
  </div>
</template>
<script>
  import hander from "../../components/handers/hander";
  import foot from "../../components/handers/foot";
  import test from "format-currency"
  export default {
    components: {
      'v-hander': hander,
      'v-foot': foot,
    },
    name: 'index',
    data(){
      return{
        testMoney:'',
      }
    },
    mounted(){
      //this.getTestMoney();
      this.getPlyay();
    },
    methods:{
      getPlyay(){
        console.log((1/3) === (1 - 2/3));
      }

      /*getTestMoney(){
        const formatCurrency = require('format-currency')
        console.log(formatCurrency(100000000.2323232))
        let sum ;
        for(let i = 0; i < 10; i++){
          sum = 0 + i;
        }
        console.log(sum)
      }*/
    }
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

