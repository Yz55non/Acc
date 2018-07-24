<template>
  <div class="foot">
    <div class="foot-nav display-flex">
      <div class="foot-code ">
        <a href="#">
          <img src="../../assets/image/weixin/image_01.jpg" alt="微信二维码">
        </a>
        <p>学习交流请添加微信</p>
      </div>
      <div class="foot-about border-left">
        <p>关于</p>
        <ul>
          <li>
            <a href="#">网站介绍</a>
          </li>
          <li>
            <a href="#">关于网站</a>
          </li>
          <li>
            <a href="#">作者简介</a>
          </li>
        </ul>
        <ul class="uls">
          <li>
            <a href="#">E-mail</a>
          </li>
         <!-- <li>
            <a href="#">网站介绍</a>
          </li>
          <li>
            <a href="#">网站介绍</a>
          </li>-->
        </ul>
      </div>
      <div class="foot-conment border-left">
        <p>漫网连接</p>
        <ul>
          <li>
            <a href="https://www.bilibili.com/">哔哩哔哩</a>
          </li>
          <li>
            <a href="https://www.dmzj.com/">动漫之家</a>
          </li>
          <li>
            <a href="https://www.zymk.cn/">知音漫客</a>
          </li>
        </ul>
        <ul class="uls">
          <li>
            <a href="http://ac.qq.com/">腾讯动漫</a>
          </li>
          <li>
            <a href="http://www.manhuatai.com/">漫画台</a>
          </li>
          <li>
            <a href="http://www.dm5.com/">动漫屋</a>
          </li>
        </ul>
      </div>
      <div class="foot-copyright flex-1 border-left">
        <p>
          本项目所有页面仅供学习交流使用，如有侵权请联系本人删除
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "foot"
  }
</script>

<style scoped lang="less">
  @import "../../assets/foot/foot";
</style>
