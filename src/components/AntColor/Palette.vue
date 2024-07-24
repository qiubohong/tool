<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { presetDarkPalettes } from '@ant-design/colors';

import CopyToClipboard from '../CopyToClipboard.vue';
import { message } from 'ant-design-vue';
const props = defineProps({
    showTitle: {
        type: Boolean,
        default: true
    },
    color: {
        type: Object,
        default: () => ({})
    }
})

const colorName = computed(() => {
    return `${props.color.english} / ${props.color.chinese}`;
});

const description = computed(() => {
    return `${props.color.description}`;
});

const name = computed(() => {
    return `${props.color.name}`;
});


const mapColors = computed(() => {
    if (presetDarkPalettes[props.color.name]) {
        return presetDarkPalettes[props.color.name].reverse()
    }
    return []

});

const afterCopy = (text: string) => {
    message.success(`${text} 复制成功`)
}

</script>
<template>
    <div class="color-palette">
        <div class="color-title" v-if="showTitle">
            {{ colorName }} {{ name }}
            <span class="color-description">{{ description }}</span>
        </div>
        <div class="main-color">
            <CopyToClipboard :text="color" :key="color" v-for="color in mapColors" @copy="afterCopy">
                <div class="main-color-item"
                    :style="`color: ${name === 'yellow' ? 'rgba(0, 0, 0, 0.85)' : '#fff'};background-color: ${color}`">
                    {{ color }}
                </div>
            </CopyToClipboard>
        </div>
    </div>
</template>
<style scoped>
.color-palette {
    display: inline-block;
    width: 31%;
    margin: 45px 1%;
}
.color-title {
    margin: 0 0 24px;
    color: #5c6b77;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    text-transform: capitalize;
}

.main-color {
    text-align: center;
}

.main-color-item {
    position: relative;
    height: 44px;
    -webkit-margin-end: 4px;
    margin-inline-end: 4px;
    padding: 0 12px;
    font-size: 14px;
    font-family: Consolas, sans-serif;
    line-height: 44px;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
.main-color-item:hover {
    -webkit-margin-end: -8px;
    margin-inline-end: -8px;
}
</style>