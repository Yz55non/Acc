<template>
  <div class="index-main">
    <div class="index-topTheme">
      <div class="topTheme autoHeight">
        <div class="topTheme_inner autoHeight">
          <div class="acc-logo">
            <a href="#" class="logo"></a>
          </div>
          <div class="topTheme_in_search">
            <div class="topTheme_in_search_input">
              <div class="topTheme_search_input" style="outline: none">
                <form action="#" ><!--method="post"-->
                  <input type="text" class="search_input" name="keywords" autocomplete="off" placeholder="请输入关键字">
                  <input type="submit" class="search_submit" id="searchBtn" name="searchBtn" value=" ">
                </form>
              </div>
              <ul>
                <li><a href="#">双星之阴阳师</a></li>
                <li><a href="#">overload</a></li>
                <li><a href="#">工作细胞</a></li>
                <li><a href="#">一人之下</a></li>
                <li><a href="#">我的青春恋爱物语果然有问题</a></li>
              </ul>
            </div>
            <div class="topTheme_cloud">
              <p>
                <a href="#">我也不知道放什么在这里(๑ŐдŐ)b</a>
              </p>
            </div>
          </div>
        </div>
        <div class="topTheme_nav">
          <div class="topTheme_nav_in">
            <ul class="topTheme_nav_li">
              <li>
                <a href="#">首页</a>
              </li>
              <li>
                <a href="#">少年</a>
              </li>
              <li>
                <a href="#">少女</a>
              </li>
              <li>
                <a href="#">冒险</a>
              </li>
              <li>
                <a href="#">搞笑</a>
              </li>
              <li>
                <a href="#">奇幻</a>
              </li>
              <li>
                <a href="#">最新更新</a>
              </li>
              <li>
                <a href="#">排行榜</a>
              </li>
              <li>
                <a href="#">全部漫画</a>
              </li>
              <li>
                <a href="#">专题</a>
              </li>
            </ul>
            <div class="topTheme_nav_inr">
              <a href="#">上传作品</a>
            </div>
          </div>
        </div>
      </div>
      <div class="1">
        11111
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
