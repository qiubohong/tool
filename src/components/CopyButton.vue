<script setup lang="ts">
import { message } from 'ant-design-vue';
import { ref } from 'vue';

const props = defineProps({
    valStr: {
        type: String,
        default: ''
    }
})
const copyResult = ref(false)
const copy = () => {
    const { valStr } = props
    if (typeof valStr != 'object') {
        navigator.clipboard.writeText(valStr)
    } else {
        navigator.clipboard.writeText(JSON.stringify(valStr, null, 4))
    }
    message.success('复制成功～');
    copyResult.value = true;
    setTimeout(() => {
        copyResult.value = false;
    }, 1500)

}
</script>
<template>
    <a-button type="default" @click="copy">
        <template #icon>
            <CheckCircleOutlined v-if="copyResult" style="color:#254000" />
        </template>
        <span>复制</span>
    </a-button>
</template>