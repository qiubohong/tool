<script setup lang="ts">
import { reactive } from 'vue';
import PageBase from '/@/components/PageBase.vue'
import { CodeDiff } from 'v-code-diff'


const state = reactive({
    old: '',
    new: ''
})

</script>
<template>
    <PageBase />
    <a-row :gutter="[16, 16]">
        <a-col :span="12">
            <a-card>
                <a-card-meta title="左侧内容">
                    <template #description>
                        <a-textarea v-model:value="state.old" placeholder="请输入左侧对比内容" rows="20" />
                    </template>
                </a-card-meta>
            </a-card>
        </a-col>
        <a-col :span="12">
            <a-card>
                <a-card-meta title="右侧内容">
                    <template #description>
                        <a-textarea v-model:value="state.new" placeholder="请输入右侧对比内容" rows="20" />
                    </template>
                </a-card-meta>
            </a-card>
        </a-col>
    </a-row>
    <div style="margin-top: 16px; text-align: center;">
        <a-typography-title>对比结果如下：</a-typography-title>
    </div>
    <CodeDiff :old-string="state.old" :new-string="state.new" output-format="side-by-side" />
</template>
