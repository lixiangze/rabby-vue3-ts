<script setup lang="ts">
import { ref } from 'vue';
interface Props{
    modelValue:number
}
const props = defineProps<Props>()
const emit=defineEmits(["update:modelValue"])
const resizeToM = ()=>{
    let res:number
    if(props.modelValue>0){
        res = props.modelValue-1
        emit("update:modelValue",res)
    }
    // const res = props.modelValue-1
    
}
const add = ()=>{
    const res = props.modelValue+1
    emit("update:modelValue",res)
}
</script>
<template>
    <button @click="resizeToM">-</button>
    <input type="text" :value="modelValue"/>
    <button @click="add">+</button>
</template>