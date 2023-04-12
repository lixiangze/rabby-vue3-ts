<template>
    <div>vue-rabbits-ts</div>
</template>
<script setup lang="ts">
import request from "@/units/request"
import { onMounted } from 'vue';

    onMounted(async()=>{
        const res = await request.get("./home/index")
        console.log(res)
    })
</script>