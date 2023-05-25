<script setup lang="ts">
import type { topCategory } from '@/types';
import { http } from '@/units/request';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

 const route =  useRoute()
//  console.log(route.params)
const id = route.params.id
const topCategoryList = ref<topCategory>()
onMounted(async()=>{
  const res = await http<topCategory>("GET", "/category",{id:id});
   topCategoryList.value = res.data.result
console.log(res.data);
})

</script>

<template>
  <div class='top-category'>
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>{{topCategoryList?.name}}</XtxBreadItem>
      </XtxBread>
    </div>
  </div>
</template>

<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }
}
</style>