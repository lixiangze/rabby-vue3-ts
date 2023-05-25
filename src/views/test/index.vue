<script setup lang="ts">
import { ref } from 'vue';
import vModelVue from './components/vModel.vue';
const count = ref(2)

</script>
<template>
    <!-- <XtxButton type="primary" size="large">按钮2</XtxButton>
    <XtxSkeleton type="primary" size="large">按钮2</XtxSkeleton> -->
    <vModelVue v-model="count"></vModelVue>
</template>