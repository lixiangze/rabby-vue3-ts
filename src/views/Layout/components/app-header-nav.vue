<script setup lang="ts">
import { RouterLink } from "vue-router";
import useStore from "@/store";  
// import { XtxSkeleton,XtxButton } from "@/components/XtxUI";
const {Home} = useStore()
console.log(Home.categoryList);

</script>

<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    
    <template v-if="Home.categoryList.length>0">
      <li v-for="item in Home.categoryList" :key="item.id">
       <RouterLink :to="`/category/${item.id}`">{{item.name}}</RouterLink>
      </li>
     
    </template>
     <template v-else >
      <li v-for="i in 9" :key="i">
        <XtxSkeleton :width="50" :height="32" bg="rgba(0,0,0,0.2)"></XtxSkeleton>
     </li>
    </template> 
  </ul>
</template>

<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
  }
}
</style>
