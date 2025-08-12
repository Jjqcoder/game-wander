<template>
    <div class="layout">
        <!-- 头部 -->
        <header>
            <button @click="toggleLeft">☰</button>
            <button @click="toggleRight">☰</button>
        </header>

        <!-- 主要内容区 -->
        <div class="main">
            <!-- 左侧边栏 -->
            <aside class="left" :class="{hidden: !showLeft}">
                <slot name="left"></slot>
            </aside>

            <!-- 内容区 -->
            <main>
                <slot></slot>
            </main>

            <!-- 右侧边栏 -->
            <aside class="right" :class="{hidden: !showRight}">
                <slot name="right"></slot>
            </aside>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const showLeft = ref(true)
const showRight = ref(true)

const toggleLeft = () => (showLeft.value = !showLeft.value)
const toggleRight = () => (showRight.value = !showRight.value)
</script>

<style>
/* 基础样式 */
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
}

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #222;
    color: #eee;
}

header {
    background: #111;
    padding: 10px;
    display: flex;
    gap: 10px;
}

button {
    background: #333;
    color: #eee;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.main {
    display: flex;
    flex: 1;
    overflow: hidden;
}

/* 侧边栏样式 */
.left,
.right {
    width: 200px;
    background: #333;
    transition: all 0.3s;
    overflow: auto;
}

.left.hidden {
    margin-left: -200px;
}

.right.hidden {
    margin-right: -200px;
}

/* 内容区样式 */
main {
    flex: 1;
    padding: 20px;
    overflow: auto;
}
</style>
