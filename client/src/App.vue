<template>
    <HolyGrailLayout>
        <div class="content">
            <h1 class="page-title">Learn English through Genshin Impact</h1>
            <div class="cards-container">
                <div v-for="item in genshinImpact" :key="item.id" class="knowledge-card">
                    <h3 class="card-id">#{{ item.id }}</h3>
                    <div class="text-content">
                        <p class="english">{{ item.english }}</p>
                        <p class="chinese">{{ item.chinese }}</p>
                    </div>
                </div>
            </div>
        </div>
    </HolyGrailLayout>
</template>

<style scoped>
.content {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: rgba(15, 23, 42, 0.8); /* 深蓝色背景，类似原神夜空 */
}

.page-title {
    color: #f8d56b; /* 更亮的金色，类似原神UI标题色 */
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.8rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-family: 'Genshin Impact', sans-serif; /* 建议使用类似原神的字体 */
}

.cards-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.knowledge-card {
    background: linear-gradient(135deg, rgba(32, 53, 85, 0.8) 0%, rgba(19, 34, 57, 0.9) 100%); /* 深蓝渐变 */
    border-left: 4px solid #f8d56b; /* 金色边框 */
    border-radius: 0 8px 8px 0;
    padding: 18px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    backdrop-filter: blur(4px); /* 毛玻璃效果 */
}

.knowledge-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(248, 213, 107, 0.2); /* 金色辉光效果 */
}

.card-id {
    color: #f8d56b;
    margin: 0 0 12px 0;
    font-size: 1.1rem;
    font-weight: 600;
}

.text-content {
    background: rgba(11, 22, 39, 0.6); /* 更深蓝的背景 */
    padding: 15px;
    border-radius: 6px;
    line-height: 1.6;
    border: 1px solid rgba(248, 213, 107, 0.1); /* 细金色边框 */
}

.english {
    color: #e9f1ff; /* 亮白色带蓝色调 */
    margin-bottom: 8px;
    font-weight: 500;
}

.chinese {
    color: #c4d1e6; /* 柔和的蓝灰色 */
}

.english::before {
    content: '🇺🇸';
    margin-right: 8px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
}

.chinese::before {
    content: '🇨🇳';
    margin-right: 8px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
}
</style>

<script setup lang="ts">
import HolyGrailLayout from './components/HolyGrailLayout.vue'
import genshinImpact from './data/genshinImpact.json'
</script>
