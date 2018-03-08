<template>
    <div>
        <!-- 右边推荐 -->
        <div class="left-220">
                <ul class="side-img-list">
                 
                    <li v-for="(item, i) in list" :key="item.id">

                        <div class="img-box">
                            <label>{{ i + 1 }}</label>
                            <img :src="item.img_url">
                        </div>
                        <div class="txt-box">
                            <router-link :to = "{name:'goodsDetail',params:{id:item.id}}">{{item.title}}</router-link>
                            <span>{{ item.add_time | date }}</span>
                        </div>
                    </li>
                 
                </ul>
            </div>
            <!--/推荐商品-->
        </div>
    
</template>

<script>
    export default {
        props:['list'],
        // 过滤器
        filters: {
            date(tplDate) {
                 let date = new Date(tplDate);
                 return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
             }
         }

        }
    
</script>

<style scoped>

</style>