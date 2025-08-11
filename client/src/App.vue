<template>
  <HolyGrailLayout :showLeftSidebar="true" :showRightSidebar="true">
    <template #header>
      <h1>圣杯布局示例</h1>
    </template>
    
    <template #left-sidebar>
      <div>左侧边栏 (10%)</div>
    </template>
    
    <template #content>
      <HelloWorld />
    </template>
    
    <template #right-sidebar>
      <div>右侧边栏 (10%)</div>
    </template>
    
    <template #footer>
      <p>页脚区域</p>
    </template>
  </HolyGrailLayout>
</template>

<script setup lang="ts">
import HolyGrailLayout from './components/HolyGrailLayout.vue';
import HelloWorld from './components/HelloWorld.vue';
</script>
