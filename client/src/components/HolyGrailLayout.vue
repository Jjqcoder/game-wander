<template>
    <div class="holy-grail-layout">
        <header class="header">
            <slot name="header"></slot>
        </header>

        <div class="main-content">
            <aside class="left-sidebar" :class="{hidden: !showLeftSidebar}">
                <slot name="left-sidebar"></slot>
            </aside>

            <main class="content">
                <slot name="content"></slot>
            </main>

            <aside class="right-sidebar" :class="{hidden: !showRightSidebar}">
                <slot name="right-sidebar"></slot>
            </aside>
        </div>

        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
import {withDefaults} from 'vue'

export interface Props {
    showLeftSidebar?: boolean
    showRightSidebar?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    showLeftSidebar: true,
    showRightSidebar: true
})
</script>

<style scoped>
.holy-grail-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header,
.footer {
    padding: 1rem;
    background-color: #f0f0f0;
    text-align: center;
}

.main-content {
    display: flex;
    flex: 1;
}

.left-sidebar,
.right-sidebar {
    width: 10%;
    background-color: #e0e0e0;
    transition: width 0.3s ease;
    overflow: hidden;
    padding: 1rem;
}

.hidden {
    width: 0;
    padding: 0;
    margin: 0;
}

.content {
    flex: 4; /* 占剩余空间的80% */
    padding: 1rem;
    background-color: #ffffff;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .main-content {
        flex-direction: column;
    }

    .left-sidebar,
    .right-sidebar {
        width: 100%;
        height: 100px;
    }

    .hidden {
        height: 0;
    }
}
</style>
