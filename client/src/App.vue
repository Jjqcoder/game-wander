<template>
    <HolyGrailLayout>
        <div class="content">
            <h1 class="page-title">Learn English through Genshin Impact</h1>

            <!-- 使用新的数据源选择器组件 -->
            <DataSourceSelector v-model="selectedDataSource" :options="availableDataSources" @change="updateDisplayData" />

            <div class="cards-container">
                <div v-for="item in displayData" :key="item.id" class="knowledge-card">
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

<script setup lang="ts">
import HolyGrailLayout from './components/HolyGrailLayout.vue'
import DataSourceSelector from './components/DataSourceSelector.vue'
import genshinImpact from './data/genshinImpact.json'
import character from './data/character.json'
import food from './data/food.json'
import {ref, onMounted} from 'vue'

// 定义数据源类型
interface DataSource {
    value: string
    label: string
    data: any[]
}

// 当前显示的数据
const displayData = ref<any[]>([])

// 可用数据源配置
const availableDataSources = ref([
    {value: 'character', label: 'Character', data: character},
    // {value: 'genshinImpact', label: 'Genshin Impact通用', data: genshinImpact},
    {value: 'food', label: 'Food', data: food}
])

// 当前选中的数据源
const selectedDataSource = ref<string>('character')

// 更新显示的数据
const updateDisplayData = () => {
    const source = availableDataSources.value.find(s => s.value === selectedDataSource.value)
    if (source) {
        displayData.value = source.data
    }
}

// 初始化时加载数据
onMounted(() => {
    updateDisplayData()
})

// 暴露方法以便外部可以添加新的数据源
const addDataSource = (newSource: DataSource) => {
    availableDataSources.value.push(newSource)
    // 如果添加的是当前选中的数据源，更新显示
    if (newSource.value === selectedDataSource.value) {
        updateDisplayData()
    }
}

// 暴露必要的方法和数据以便外部使用
defineExpose({
    addDataSource,
    availableDataSources,
    selectedDataSource
})
</script>

<style scoped>
.content {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: rgba(15, 23, 42, 0.8);
}

.page-title {
    color: #f8d56b;
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.8rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-family: 'Genshin Impact', sans-serif;
}

.data-source-selector {
    margin-bottom: 20px;
    text-align: center;
}

.data-source-selector label {
    color: #c4d1e6;
    margin-right: 10px;
}

.data-source-selector select {
    background: rgba(32, 53, 85, 0.8);
    color: #f8d56b;
    border: 1px solid #f8d56b;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 1rem;
    cursor: pointer;
}

.data-source-selector select:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(248, 213, 107, 0.3);
}

.cards-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.knowledge-card {
    background: linear-gradient(135deg, rgba(32, 53, 85, 0.8) 0%, rgba(19, 34, 57, 0.9) 100%);
    border-left: 4px solid #f8d56b;
    border-radius: 0 8px 8px 0;
    padding: 18px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
}

.knowledge-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(248, 213, 107, 0.2);
}

.card-id {
    color: #f8d56b;
    margin: 0 0 12px 0;
    font-size: 1.1rem;
    font-weight: 600;
}

.text-content {
    background: rgba(11, 22, 39, 0.6);
    padding: 15px;
    border-radius: 6px;
    line-height: 1.6;
    border: 1px solid rgba(248, 213, 107, 0.1);
}

.english {
    color: #e9f1ff;
    margin-bottom: 8px;
    font-weight: 500;
}

.chinese {
    color: #c4d1e6;
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
