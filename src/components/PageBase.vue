<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter()
const backIndex = () => {
    if (router.hasRoute('index')) {
        router.back()
    } else {
        router.replace('/')
    }
}

const currentInfo = computed(() => {
    return router.currentRoute.value.meta
})

onMounted(() => {
    document.title = currentInfo.value.title as any

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            backIndex()
        }
    }, { once: true })
})

onUnmounted(() => {
    document.title = "常用工具集合"
})
</script>
<template>
    <a-page-header :title="currentInfo.title" :sub-title="currentInfo.description" @back="backIndex" />
    <div style="padding: 0 16px">
        <slot></slot>
    </div>
</template>