<script setup lang="ts">
// import type { GoodsDetail } from '@/components/XtxUI/Sku/goods';
// import type { Spec } from '@/components/XtxUI/Sku/goods';
import type { GoodsDetail, Value,Spec,Sku  } from '@/types';
import bwPowerSet from '@/vender/power-set';
import { ref } from 'vue';
//
export type EmitProp ={
  skuId: string,
   price: string,
   oldPrice: string,
   inventory: number,
}
interface Props {
  goods:GoodsDetail
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (el:"change",value:EmitProp):void
}>()
// console.log(111333,props)
// const selected = ref(false)
const spliter = ","
const objBtn = (spec:Spec,obj:Value)=>{
  // console.log(11222,spec,obj); 
  
  if(obj.selected){
    obj.selected = false
  }else{ 
    spec.values.forEach((item)=>{
      item.selected = false
    })
    obj.selected = true
  }
  updateDisabledStatus(props.goods.specs,pathMap)
  if (obj.disabled) return;
  // 获取选中状态
  const selectedArr = getSelectedSpec(props.goods.specs).filter((v) => v);
  // 选中满全部
  if (selectedArr.length === props.goods.specs.length) {
    // 根据选中组合去字典查找
    const getSkuPath = pathMap[selectedArr.join(spliter)];
    // 如果查找不到直接退出
    if (!getSkuPath) return;
    // 查找到获取 SkuId
    const skuId = getSkuPath[0];
    // 获取 Sku 信息
    const sku = props.goods.skus.find((sku) => sku.id === skuId);
    console.log(sku);
    
    if (sku) {
      // 传递给父组件
      emit("change", {
        skuId: sku.id,
        price: sku.price,
        oldPrice: sku.oldPrice,
        inventory: sku.inventory,
      });
    }
  } else {
    // 有没选中的
    emit("change", {} as EmitProp);
  }
}
type PathMap = {
  [key:string]:string[];
}

type Skus = Sku[]
const getPathMap = (skus:Skus)=>{
  const pathMap = { } as PathMap
  skus.forEach(sku=>{
    // console.log(sku);
    
    if(sku.inventory!==0){
      const specs = sku.specs.map(spec=>spec.valueName)
      // console.log(111,specs);
      
      const powerSet = bwPowerSet(specs)
      // console.log(res);
      powerSet.forEach(set=>{
        const key = set.join(spliter)
        if(!pathMap[key]){
          pathMap[key]=[]
        }
        pathMap[key].push(sku.id)
      })
      
    }
  })
  return pathMap
}
const pathMap = getPathMap(props.goods.skus)
// console.log(pathMap);
type Specs = Spec[];
const updateDisabledStatus = (specs: Specs, pathMap: PathMap) => {
    // 遍历每一种规格
    specs.forEach((spec, i) => {
    // 先拿到当前选择的项目
    const selectedValues = getSelectedSpec(specs);
    // 遍历每一个按钮
    spec.values.forEach((btnObj) => {
      // 如果按钮未被选择
      if (!btnObj.selected) {
        // 🚨模拟用户选择
        selectedValues[i] = btnObj.name;
        // 去掉空值之后组合成查找字典的 key
        const key = selectedValues.filter((v) => v).join(",");
        // 判断组合后的情况，在字典中是否能找到
        if (pathMap[key]) {
          btnObj.disabled = false;
        } else {
          btnObj.disabled = true;
        }
      }
    });
  });
};

// ⌛ 组件初始化的时候更新禁用状态
updateDisabledStatus(props.goods.specs, pathMap);
function getSelectedSpec (specs: Specs) {
  // 注意类型定义
  const arr: string[] = [];
  specs.forEach((spec, index) => {
    // console.log(22222,spec);
    
    // 根据spec中values中找是否有，selected为true的，把selected为true的那个按钮存储起来
    const btnObj = spec.values.find((item) =>  item.selected);
    // console.log(3333,btnObj);
    
    // 如果为选中，就把 name 添加到数组中
    arr[index] = btnObj ? btnObj.name : "";
  });
  return arr;
}
</script>

<template>
  <div class="goods-sku">
    <dl v-for="spec in goods.specs" :key="spec.name">
      <dt>{{spec.name}}</dt>
      <dd>
        <template v-for="btnobj in spec.values" :key="btnobj.name">
          <img v-if="btnobj.picture"  
          :class="{selected:btnobj.selected}"
          :src="btnobj.picture"
          :title="btnobj.name"
          :alt="btnobj.name"
          @click="objBtn(spec,btnobj)"
          />
          <span :class="{selected:btnobj.selected,disabled:btnobj.disabled}" v-else @click="objBtn(spec,btnobj)">{{btnobj.name }}</span>
        </template>
        <!-- <img
          class="disabled"
          src="https://yanxuan-item.nosdn.127.net/d77c1f9347d06565a05e606bd4f949e0.png"
          alt=""
        /> -->
      </dd>
    </dl>
    <!-- <dl>
      <dt>尺寸</dt>
      <dd>
        <span class="disabled">10英寸</span>
        <span class="selected">20英寸</span>
        <span>30英寸</span>
      </dd>
    </dl>
    <dl>
      <dt>版本</dt>
      <dd>
        <span>美版</span>
        <span>港版</span>
      </dd>
    </dl> -->
  </div>
</template>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
