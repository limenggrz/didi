<template>
    <div>
        <!-- 导航栏 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link :to="{name: 'goodsList'}">首页</router-link>&gt;
                <router-link to="">商品详情</router-link>
            </div>
        </div>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">

                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">
                                <div class="pic-box">
                                    <div class="magnifier" id="magnifier1">
                                        <div class="magnifier-container">
                                            <div class="images-cover"></div>
                                            <!--当前图片显示容器-->
                                            <div class="move-view"></div>
                                            <!--跟随鼠标移动的盒子-->
                                        </div>
                                        <div class="magnifier-assembly">
                                            <div class="magnifier-btn">
                                                <span class="magnifier-btn-left">&lt;</span>
                                                <span class="magnifier-btn-right">&gt;</span>
                                            </div>
                                            <!--按钮组-->
                                            <div class="magnifier-line">
                                                <ul class="clearfix animation03">
                                                    <li v-for="item in top.imglist" :key="item.id">
                                                        <div class="small-img">
                                                            <img :src="item.original_path" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!--缩略图-->
                                        </div>
                                        <div class="magnifier-view"></div>
                                        <!--经过放大的图片显示容器-->
                                    </div>
                                </div>
                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <div class="goods-spec">
                                <h1>{{ top.goodsinfo.title }}</h1>
                                <p class="subtitle">{{ top.goodsinfo.sub_title }}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{ top.goodsinfo.goods_no }}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{ top.goodsinfo.market_price }}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em class="price" id="commoditySellPrice">¥{{ top.goodsinfo.sell_price }}</em>
                                        </dd>
                                    </dl>
                                </div>

                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                                <el-input-number size="mini" v-model="num"></el-input-number>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{ top.goodsinfo.stock_quantity }}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div class="btn-buy" id="buyButton">
                                                <button class="buy">立即购买</button>
                                                <button class="add">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>

                            </div>
                            <!--/商品信息-->
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <!--选项卡-->
                            <el-tabs type="border-card">
                                <el-tab-pane label="商品介绍">
                                    <div v-html="top.goodsinfo.content"></div>
                                </el-tab-pane>
                                <el-tab-pane label="商品评论"></el-tab-pane>
                                    <app-comment></app-comment>
                            </el-tabs>
                            <!--/选项卡-->

                            <!--选项内容-->

                        </div>

                    </div>

                </div>
                <!--/页面左边-->

                <!--页面右边-->
                <div class="left-220">
                    <app-aside :list="top.hotgoodslist"></app-aside>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
// 导入放大镜
import "@/lib/imgzoom/css/magnifier.css";
import "@/lib/imgzoom/js/magnifier.js";
import $ from "jquery";

import AppAside from "./subcom/CommonAside.vue";
import AppComment from "./subcom/Comment.vue";

export default {
  components: {
    AppAside,
    AppComment
  },

  data() {
    return {
      id: this.$route.params.id,
      num: 1,
      top: {
        goodsinfo: {},
        imglist: [],
        hotgoodslist: []
      }
    };
  },

  methods: {
    // 根据当前id获取数据
    getTop() {
      this.$http.get(this.$api.goodsDetail + this.id).then(res => {
        if (res.data.status == 0) {
          this.top = res.data.message;
        }
      });
    }
  },

  created() {
    this.getTop();
  },
  mounted() {
    var magnifierConfig = {
      magnifier: "#magnifier1", //最外层的大容器
      width: 370, //承载容器宽
      height: 370, //承载容器高
      moveWidth: null, //设置了移动盒子的宽度，则不计算缩放比例
      zoom: 2 //缩放比例
    };
    setTimeout(function() {
      var _magnifier = $().imgzoon(magnifierConfig);
    }, 100);
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.getTop();
      var magnifierConfig = {
        magnifier: "#magnifier1", //最外层的大容器
        width: 370, //承载容器宽
        height: 370, //承载容器高
        moveWidth: null, //设置了移动盒子的宽度，则不计算缩放比例
        zoom: 2 //缩放比例
      };
      setTimeout(function() {
        var _magnifier = $().imgzoon(magnifierConfig);
      }, 100);
    }
  }
};
</script>

<style scoped>

</style>