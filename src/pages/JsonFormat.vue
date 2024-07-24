<script setup lang="ts">
import { ref } from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import PageBase from '/@/components/PageBase.vue'
import CopyButton from '/@/components/CopyButton.vue'


const json = ref('')
const json2 = ref<any>(null)
const message = ref('')
const JsonFormat = () => {
    try {
        json2.value = JSON.parse(json.value)
    } catch (e) {
        message.value = 'json格式有错误'
        json2.value = json.value
    }

}

</script>
<template>
    <PageBase>
        <!-- 错误提示 -->
        <a-alert v-if="message != ''" type="error" :message="message" show-icon closable />
        <a-row :gutter="[8, 8]" style="margin-top: 16px;height: 100%">
            <a-col :span="12">
                <div style="text-align: right;margin-bottom: 16px;">
                    <a-button type="primary" @click="JsonFormat" style="">格式化</a-button>
                </div>
                <a-textarea v-model:value="json" placeholder="请输入json" rows="30" />

            </a-col>
            <a-col :span="12" style="height: 100%">
                <div style="margin-bottom: 16px;">
                    <CopyButton :val-str="json2" />
                </div>
                <div ref="jsonPretty"
                    style="height: calc(100% - 120px);overflow: auto; background-color: #fff;padding: 16px; position: relative;">
                    <vue-json-pretty v-if="json2" :data="json2" showLineNumber show-icon show-length />
                </div>
            </a-col>
        </a-row>
    </PageBase>
</template>