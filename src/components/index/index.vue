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
      <div class="warp autoHeight">
        <div class="warp_banner autoHeight" >
          <div class="banner_img widthEigLeft" id="outer">
            <div class="banner_inner" id="inner">
              <ul>
                <li class="bc-1">
                    <div class="banner_img_one con_left">
                      <span class="img_one_i cu">
                        <a href="#" target="_blank" title="测试数据一">
                          <div class="hoverChange ch1"></div>
                          <img src="https://images.dmzj.com/tuijian/330_376/180816muguanghuanying2.jpg" alt >
                          <p class="mh_title">暮光幻影</p>
                        </a>
                      </span>
                    </div>
                </li>
                <li class="bc-2"></li>
              </ul>
            </div>
          </div>
          <div class="banner_rank">
            <h2>点击排行</h2>
            <ul class="tab-option-ul">
              <li class="tab-option-li"><a href="#" class="tab-option tab-option-selected">周</a></li>
              <li class="tab-option-li"><a href="#" class="tab-option">月</a></li>
            </ul>
            <div class="tab-content" v-if="true">
              <ul>
                <li class="rank_tabs_first">
                  <sub></sub>
                  <em>01</em>
                  <a href="#">
                    <img src="https://images.dmzj.com/tuijian/330_376/180816muguanghuanying2.jpg" alt="暮光幻影">
                  </a>
                  <span class="rank_first_con">
                    <a href="#" title="暮光幻影" target="_blank">
                      <h3>暮光幻影</h3>
                    </a>
                    <p>作者：元素研究室</p>
                    <p>更新至131话：情理之中</p>
                  </span>
                </li>
                <li class="rank_tabs_li">
                  <em class="c_5">02</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em class="c_5">03</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>04</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>05</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>06</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>07</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>08</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>09</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>10</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
              </ul>
            </div>
            <div class="tab-content" v-if="false">
              <ul>
                <li class="rank_tabs_first">
                  <sub></sub>
                  <em>01</em>
                  <a href="#">
                    <img src="https://images.dmzj.com/tuijian/330_376/180816muguanghuanying2.jpg" alt="暮光幻影">
                  </a>
                  <span class="rank_first_con">
                    <a href="#" title="暮光幻影" target="_blank">
                      <h3>暮光幻影</h3>
                    </a>
                    <p>作者：元素研究室</p>
                    <p>更新至131话：情理之中</p>
                  </span>
                </li>
                <li class="rank_tabs_li">
                  <em class="c_5">02</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em class="c_5">03</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>04</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>05</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>06</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>07</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>08</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>09</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
                <li class="rank_tabs_li">
                  <em>10</em>
                  <span class="rank_tabs_title">
                    <a href="#" title="妖神记" target="_blank">妖神记</a>
                  </span>
                  <span class="rank_tabs_sec">第174话 回归（下）</span>
                </li>
              </ul>
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
