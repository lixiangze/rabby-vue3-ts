<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  size:{
    type:String as PropType<"large"|"middle"|"small"|"mini">,
    // defaule:"middle"
  },
  type:{
    type:String as PropType<"primary"|"plain"|"gray">,
    default:"default"
  }
})
</script>
<template>
    <button class="xtx-button ellipsis" :class="`${size} ${type}`">
      <slot></slot>
    </button>
  </template>
  <style scoped lang="less">
  // 基于类名定义一些和定制样式无关的样式
  .xtx-button {
    appearance: none;
    border: none;
    outline: none;
    background: #fff;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }
  // ---------大小类名-------------
  // 大
  .large {
    width: 240px;
    height: 50px;
    font-size: 16px;
  }
  // 中
  .middle {
    width: 180px;
    height: 50px;
    font-size: 16px;
  }
  // 小
  .small {
    width: 100px;
    height: 32px;
  }
  //超小
  .mini {
    width: 60px;
    height: 32px;
  }
  
  // ---------颜色类名----------
  // 默认色
  .default {
    border-color: #e4e4e4;
    color: #666;
  }
  // 确认
  .primary {
    border-color: @xtxColor;
    background: @xtxColor;
    color: #fff;
  }
  // 普通
  .plain {
    border-color: @xtxColor;
    color: @xtxColor;
    background: lighten(@xtxColor, 50%);
  }
  // 灰色
  .gray {
    border-color: #ccc;
    background: #ccc;
    color: #fff;
  }
  </style>