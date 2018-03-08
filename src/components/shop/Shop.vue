<template>
    <div>
        <!-- 公共头部 -->
        <app-header></app-header>
        <!-- 变化主体 -->
        <router-view>
            
        </router-view>
        <app-fooder></app-fooder>
    </div>
</template>

<script>
import appHeader from'./subcom/Header.vue'
import appFooder from'./subcom/Footer.vue'

    export default {
        components: {
            appHeader,
            appFooder
            
        }
    }
</script>

<style scoped lang="less">

</style>