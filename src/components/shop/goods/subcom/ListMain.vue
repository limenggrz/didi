<template>
    <div>
        <!-- 手机数码 -->
        <div class="section" v-for="item in setsion" :key="item.level1cateid">

            <!--子类-->
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a v-for="fox in item.level2catelist" :key="fox.subcateid">{{fox.subcatetitle}}</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="subitem in item.datas" :key="subitem.artID">
                            <!-- <a href="/goods/show-87.html"> -->
                            <router-link :to="{name:'goodsDetail',params:{id:subitem.artID}}">
                                <div class="img-box">
                                    <img :src="subitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
                                    <p class="price">
                                        <b>¥2195.00</b>元</p>
                                    <p>
                                        <strong>库存 60</strong>
                                        <span>市场价：
                                            <s>2499.00</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      setsion: []
    };
  },
  methods: {
    getdata() {
      this.$http.get(this.$api.goodsContent).then(res => {
        if (res.data.status == 0) {
          this.setsion = res.data.message;
        }
      });
    }
  },
  created() {
    this.getdata();
  }
};
</script>

<style scoped>

</style>