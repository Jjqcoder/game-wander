<template>
    <HolyGrailLayout>
        <!-- 主内容区 -->
        <div class="content">
            <h1>我的应用</h1>
            <p>这是主要内容区域</p>
            <p>当侧边栏隐藏时，我会自动扩展填满空间</p>
        </div>

        <!-- 左侧边栏内容 -->
        <template #left>
            <div class="sidebar">
                <h3>左侧菜单</h3>
                <ul>
                    <li>菜单项1</li>
                    <li>菜单项2</li>
                    <li>菜单项3</li>
                </ul>
            </div>
        </template>

        <!-- 右侧边栏内容 -->
        <template #right>
            <div class="sidebar">
                <h3>右侧面板</h3>
                <p>这里可以放通知、设置等内容</p>
            </div>
        </template>
    </HolyGrailLayout>
</template>

<script setup lang="ts">
import HolyGrailLayout from './components/HolyGrailLayout.vue'
</script>

<style scoped>
HolyGrailLayout {
    color: white;
}
</style>
