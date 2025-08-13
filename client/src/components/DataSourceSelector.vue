<template>
    <div class="data-source-selector">
        <label for="dataSource">{{ labelText }}</label>
        <select id="dataSource" v-model="selectedValue" @change="handleChange">
            <option v-for="source in options" :key="source.value" :value="source.value">
                {{ source.label }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'

interface DataSourceOption {
    value: string
    label: string
}

const props = defineProps({
    options: {
        type: Array as () => DataSourceOption[],
        required: true
    },
    modelValue: {
        type: String,
        required: true
    },
    labelText: {
        type: String,
        default: '选择学习内容：'
    }
})

const emit = defineEmits(['update:modelValue', 'change'])

const selectedValue = ref(props.modelValue)

// 处理内部值变化
const handleChange = () => {
    emit('update:modelValue', selectedValue.value)
    emit('change', selectedValue.value)
}

// 监听外部modelValue变化
watch(
    () => props.modelValue,
    newVal => {
        selectedValue.value = newVal
    }
)
</script>

<style scoped>
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
</style>
