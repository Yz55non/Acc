<template>
  <div class="head-content">
    <div class="head-nav">
      <a href="/">
        <img src="../../assets/image/hander/logo-new.png" alt="" class="logo-img">
      </a>
      <div class="a-nav">
        <a href="#">主页</a>
        <a href="#">日漫</a>
        <a href="#">国创</a>
        <a href="#">原创</a>
        <a href="#">论坛</a>
        <a href="#">好评榜</a>
      </div>
      <div class="nav-login">
        <a href="#">登录</a>
        <p>|</p>
        <a href="#">注册</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      img: {
        type: String,
      },
    },
    name: 'hander',
    data(){
      return{
        logoImg: '',
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init: function () {
        if (this.img == null || this.img == "") {
          this.logoImg = "../../assets/image/hander/logo-new.png";
        } else {
          this.logoImg = this.img;
        }
      }
    },
  }
</script>
<style scoped lang="less">
  @import "../../assets/css/header";
</style>

