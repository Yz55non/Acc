<template>
  <div class="main">
    <div class="home dispaly-flex">
      <div class="home-main">
        <div class="index-search">
          <a href="#">
            <img src="../../assets/image/bukaniang.gif" height="150" width="150"/>
          </a>
          <div class="search-main">
            <div class="search">
              <input type="text" class="search-input" placeholder="请输入搜索内容">
              <button class="search-button"></button>
            </div>
            <ul>
              <li><a href="#">双星之阴阳师</a></li>
              <li><a href="#">overload</a></li>
              <li><a href="#">工作细胞</a></li>
              <li><a href="#">一人之下</a></li>
              <li><a href="#">我的青春恋爱物语果然有问题</a></li>
            </ul>
          </div>
          <div class="search-clode">
              <p>
                <a href="#">联系站长QQ</a>
              </p>
          </div>
         </div>
        <div class="home-bar">
          <div class="bar">
            <div class="home-bar-ch">
              <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">少年</a></li>
                <li><a href="#">少女</a></li>
                <li><a href="#">冒险</a></li>
                <li><a href="#">搞笑</a></li>
                <li><a href="#">奇幻</a></li>
                <li><a href="#">最新更新</a></li>
                <li><a href="#">排行榜</a></li>
                <li><a href="#">全部漫画</a></li>
                <li><a href="#">专题</a></li>
              </ul>
            </div>
            <div class="update">
              <a href="#">上传作品</a>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/index.less";
  @import "../../assets/css/public.less";
</style>
