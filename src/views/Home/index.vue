<script setup lang="ts">
import HomeBanner from "./components/home-banner.vue";
import HomeCategory from "./components/home-category.vue";
import homeNewVue from "./components/home-new.vue";
import HomePanel from "./components/home-panel.vue";
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
    </div>
    <div class="container">
        <homeNewVue/>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
