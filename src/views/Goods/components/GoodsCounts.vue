<script setup lang="ts">
//
const props = defineProps({
  isLabel:{
    type:Boolean,
    default:false
  },
  max:{
    type:Number,
    default:9
  },
  min:{
    type:Number,
    default:1
  },
  modelValue:{
    type:Number,
    // defaule:1
    required:true
  }
})
const emit = defineEmits<{
  (e: 'changeCount', value: number): void
  (e: 'Update:modelValue', modelValue: number): void
}>()
const add = ()=>{
  const temp = props.modelValue + 1
  console.log(temp);
  
  if(temp > props.max) return;
  emit("Update:modelValue",temp);
  emit("changeCount",temp);
}
const minus = ()=>{
  const temp = props.modelValue - 1
  if(props.modelValue<=props.min) return
  emit("Update:modelValue",temp);
  emit("changeCount",temp);
}

</script>

<template>
  <div class="xtx-numbox">
    <div class="label">数量</div>
    <div class="numbox">
      <a href="javascript:;" @click="minus">-</a>
      <input type="text"  :value="props.modelValue"/>
      <a href="javascript:;" @click="add">+</a>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
</style>
