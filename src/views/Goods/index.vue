<script setup lang="ts">
import type { GoodsDetail } from '@/types'
import { onMounted, ref,computed } from 'vue';
import { useRoute } from 'vue-router';
import buttonXtr from './components/buttonXtr.vue';
import GoodsCounts from './components/GoodsCounts.vue';
import goodsSku, { type EmitProp } from "./components/goods-sku.vue"
import type { SkuEmit } from '@/components/XtxUI/Sku/index.vue';
import { http } from '@/units/request';
// import {computed} from "vue"
//
const GoodsDetailList = ref<GoodsDetail>()
const route = useRoute()
const id = route.params.id
onMounted(async()=>{
    const res =await http<GoodsDetail>("GET","goods",{id:id})
    // console.log(99999,res)
    // console.log(res.data.result);
    GoodsDetailList.value = res.data.result
    
})
const isLabel = ref(false)
let count = ref(1)
const changeCount = (value:number)=>{
  // console.log(123,value);
  count.value = value
}
const maxInventory = computed(()=>{
  if(!GoodsDetailList.value) return 1
  return GoodsDetailList.value?.inventory >0?GoodsDetailList.value?.inventory:1
})
const changeSku = (value:SkuEmit)=>{
  if (GoodsDetailList.value && value.skuId) {
    // GoodsDetailList.value.price = value.price;
    // GoodsDetailList.value.oldPrice = value.oldPrice;
    // GoodsDetailList.value.inventory = value.inventory;
    // GoodsDetailList.value.price = value.price
  }
}
const changeThis = (value:EmitProp )=>{
  // if(GoodsDetailList.value&&value.skuId)
  if (GoodsDetailList.value && value.skuId) {
    GoodsDetailList.value.price = value.price;
    GoodsDetailList.value.oldPrice = value.oldPrice;
    GoodsDetailList.value.inventory = value.inventory;
  }
  
}
</script>

<template>
    <div class="xtx-goods-page">
      <div class="container">
        <!-- 商品信息 -->
        <div class="goods-info" v-if="GoodsDetailList">
          <div class="media">
            <!-- 图片预览区 -->
            <div class="goods-image">
              <!-- 图片预览组件 -->
              <XtxImageView :image-list="GoodsDetailList.mainPictures"></XtxImageView>
            </div>
            <!-- 统计数量 -->
            <ul class="goods-sales">
              <li>
                <p>销量人气</p>
                <p>100+</p>
                <p><i class="iconfont icon-task-filling"></i>销量人气</p>
              </li>
              <li>
                <p>商品评价</p>
                <p>200+</p>
                <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
              </li>
              <li>
                <p>收藏人气</p>
                <p>80+</p>
                <p><i class="iconfont icon-favorite-filling"></i>收藏商品</p>
              </li>
              <li>
                <p>品牌信息</p>
                <p>90+</p>
                <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
              </li>
            </ul>
          </div>
          <!-- 商品信息区 -->
          <div class="spec">
            <!-- 商品主要信息 -->
            <div class="goods-main">
              <p class="g-name">{{GoodsDetailList.name}}</p>
              <p class="g-desc">{{GoodsDetailList.desc}}</p>
              <p class="g-price">
                <span>{{GoodsDetailList.price}}</span>
                <span>{{GoodsDetailList.oldPrice}}</span>
              </p>
              <div class="g-service">
                <dl>
                  <dt>促销</dt>
                  <dd>12月好物放送，App领券购买直降120元</dd>
                </dl>
                <dl>
                  <dt>配送</dt>
                  <dd>至</dd>
                  <dd>
                    <XtxCity />
                  </dd>
                </dl>
                <dl>
                  <dt>服务</dt>
                  <dd>
                    <span>无忧退货</span>
                    <span>快速退款</span>
                    <span>免费包邮</span>
                    <a href="javascript:;">了解详情</a>
                  </dd>
                </dl>
              </div>
            </div>
            <!-- 规格选择组件 -->
            <XtxSku :goods="GoodsDetailList" @change="changeSku"></XtxSku>
            <goodsSku :goods="GoodsDetailList" @change="changeThis"></goodsSku>
            <!-- 数量选择组件 -->
            <XtxCount :is-label="isLabel" @change="changeCount" :max="maxInventory" :min="1" :modelValue="count"></XtxCount>
            <!-- <GoodsCounts :is-label="isLabel" @change="changeCount" :max="maxInventory" :min="1" v-model="count"></GoodsCounts> -->
            <!-- 按钮组件 -->
            <XtxButton size="middle" type="primary" style="margin-top: 20px;">加入购物车</XtxButton>
            <!-- <buttonXtr size="middle" type="primary">加入购物车</buttonXtr> -->
          </div>
        </div>
        <div class="goods-info loading">

        </div>
        <!-- 商品详情 -->
        <div class="goods-footer">
          <div class="goods-article">
            <!-- 商品详情 -->
            <div class="goods-tabs"></div>
          </div>
          <!-- 24热榜+专题推荐 -->
          <div class="goods-aside"></div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped lang="less">
  .container {
    margin-top: 20px;
  }
  
  // 商品信息
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;
    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }
    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }
  .loading{
    background: url("@/assets/images/loading.gif") no-repeat center;
  }
  // 图片预览区
  .goods-image {
    width: 480px;
    height: 400px;
    background-color: #eee;
  }
  
  // 统计数量
  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;
    li {
      flex: 1;
      position: relative;
      ~ li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: "";
      }
      p {
        &:first-child {
          color: #999;
        }
        &:nth-child(2) {
          color: @priceColor;
          margin-top: 10px;
        }
        &:last-child {
          color: #666;
          margin-top: 10px;
          i {
            color: @xtxColor;
            font-size: 14px;
            margin-right: 2px;
          }
          &:hover {
            color: @xtxColor;
            cursor: pointer;
          }
        }
      }
    }
  }
  
  // 商品信息区
  .spec {
    .g-name {
      font-size: 22px;
    }
    .g-desc {
      color: #999;
      margin-top: 10px;
    }
    .g-price {
      margin-top: 10px;
      span {
        &::before {
          content: "¥";
          font-size: 14px;
        }
        &:first-child {
          color: @priceColor;
          margin-right: 10px;
          font-size: 22px;
        }
        &:last-child {
          color: #999;
          text-decoration: line-through;
          font-size: 16px;
        }
      }
    }
    .g-service {
      background: #f5f5f5;
      width: 500px;
      padding: 20px 10px 0 10px;
      margin-top: 10px;
      dl {
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        dt {
          width: 50px;
          color: #999;
        }
        dd {
          color: #666;
          &:last-child {
            span {
              margin-right: 10px;
              &::before {
                content: "•";
                color: @xtxColor;
                margin-right: 2px;
              }
            }
            a {
              color: @xtxColor;
            }
          }
        }
      }
    }
  }
  
  .goods-footer {
    display: flex;
    margin-top: 20px;
    .goods-article {
      width: 940px;
      margin-right: 20px;
    }
    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }
  .goods-tabs {
    min-height: 600px;
    background: #fff;
  }
  .goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
  }
  </style>
  