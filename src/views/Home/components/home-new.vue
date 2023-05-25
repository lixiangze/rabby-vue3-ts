<script setup lang="ts">
import useStore from '@/store';
import HomePanel from './home-panel.vue'
import { useObserver } from '@/hooks';

const {Home} = useStore()

const {target} = useObserver(Home.getNewList)

// console.log(111,Home.newList)
</script>

<template>
  <div class="home-new">
    <HomePanel ref="target" title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right><XtxMore path="/" /></template>
      <!-- 面板内容 -->
      <ul class="goods-list" v-if="Home.newList.length>0">
        <li v-for="item in Home.newList" :key="item.id">
          <RouterLink :to="`/goods/${item.id}`">
            <img
              :src="item.picture"
              alt=""
            />
            <p class="name ellipsis">{{item.name}}</p>
            <p class="price">&yen;{{item.price}}</p>
          </RouterLink>
        </li>
      </ul>
      <ul class="goods-list" v-else>
        <li v-for="i in 4" :key="i">
            <XtxSkeleton :width="306" :height="406" bg="rgba(0,0,0,0.2)"></XtxSkeleton>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
