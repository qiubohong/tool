<script setup lang="ts">
import Palette from './Palette.vue'
const colors = [
    {
        name: 'red',
        english: 'Dust Red',
        chinese: '薄暮',
        description: '斗志、奔放',
    },
    {
        name: 'volcano',
        english: 'Volcano',
        chinese: '火山',
        description: '醒目、澎湃',
    },
    {
        name: 'orange',
        english: 'Sunset Orange',
        chinese: '日暮',
        description: '温暖、欢快',
    },
    {
        name: 'gold',
        english: 'Calendula Gold',
        chinese: '金盏花',
        description: '活力、积极',
    },
    {
        name: 'yellow',
        english: 'Sunrise Yellow',
        chinese: '日出',
        description: '出生、阳光',
    },
    {
        name: 'lime',
        english: 'Lime',
        chinese: '青柠',
        description: '自然、生机',
    },
    {
        name: 'green',
        english: 'Polar Green',
        chinese: '极光绿',
        description: '健康、创新',
    },
    {
        name: 'cyan',
        english: 'Cyan',
        chinese: '明青',
        description: '希望、坚强',
    },
    {
        name: 'blue',
        english: 'Daybreak Blue',
        chinese: '拂晓蓝',
        description: '包容、科技、普惠',
    },
    {
        name: 'geekblue',
        english: 'Geek Blue',
        chinese: '极客蓝',
        description: '探索、钻研',
    },
    {
        name: 'purple',
        english: 'Golden Purple',
        chinese: '酱紫',
        description: '优雅、浪漫',
    },
    {
        name: 'magenta',
        english: 'Magenta',
        chinese: '法式洋红',
        description: '明快、感性',
    },
];
</script>
<template>
    <div class='color-palettes'>
        <Palette :key="color.name" :color="color" showTitle v-for="color in colors" />
    </div>
</template>
<style scoped>
.color-palettes{
    background-color: #fff;
}
</style>