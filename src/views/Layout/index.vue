<script setup lang="ts">
import AppTopnav from './components/app-topnav.vue'
import AppHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue';
import useStore from '@/store'
import { onMounted } from 'vue';
import appHeaderSticky from './components/app-header-sticky.vue';
// import home from "@/views/Home/index.vue"
const {Home} = useStore()
onMounted(()=>{
  // console.log(Home.getALLCategory())
})
</script>

<template>
  <AppTopnav />
   <AppHeader />
   <appHeaderSticky></appHeaderSticky>
   <main class="app-body">
    <!-- 路由出口 -->
    <RouterView :key="$route.fullPath"></RouterView>
  </main>
   <appFooter />
   
</template>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>