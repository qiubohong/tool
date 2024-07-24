<script setup lang="ts">
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { LinkOutlined } from '@ant-design/icons-vue'
import ToolList from '../business';

const router = useRouter()
const goToLink = (path: string) => {
    router.push(path)
}

</script>
<template>
    <!-- 基于 Antd vue 生成九宫格 -->
    <a-row :gutter="[16, 16]" style="padding:30px">
        <a-col :span="8" :key="item.key" v-for="item in ToolList" :xs="24" :sm="12" :md="8" :lg="6">
            <a-card hoverable  @click="goToLink(item.path)">
                <template #actions>
                    <a-button @click="goToLink(item.path)">
                        <template #icon>
                            <LinkOutlined />
                        </template>
                        前往访问
                    </a-button>
                </template>
                <a-card-meta :title="item.title" >
                    <template #description>
                        <div style="height: 4em;">{{  item.description }}</div>
                    </template>
                </a-card-meta>
            </a-card>
        </a-col>
    </a-row>
</template>