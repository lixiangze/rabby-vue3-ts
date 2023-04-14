<script setup lang="ts">
import AppTopnav from './components/app-topnav.vue'
import AppHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue';
</script>

<template>
  <AppTopnav />
   <AppHeader />
   <main class="app-body">
    <!-- 路由出口 -->
  </main>
   <appFooter />
</template>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>