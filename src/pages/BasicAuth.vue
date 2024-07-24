<script setup lang="ts">
import { reactive } from 'vue';
import PageBase from '/@/components/PageBase.vue'
const formState = reactive({
    username: '',
    password: '',
    mode: 1,
    basicCode: '',
    basicCodeHeader: '',
})


const encodeBasic = () => {
    return btoa(formState.username + ':' + formState.password)
}

const decodeBaisc = () => {
    return atob(formState.basicCode.replace('Basic ', ''))
}

const toggleGenerate = () => {
    // 根据 mode 判断是生成  Basic 还是解密 Basic
    if (formState.mode == 1) {
        // 生成
        const encodeStr = encodeBasic();
        formState.basicCode = encodeStr
        formState.basicCodeHeader = `Authorization: Basic ${encodeStr}`
    } else {
        // 解密
        const decodeStr = decodeBaisc();
        formState.username = decodeStr.split(":")[0]
        formState.password = decodeStr.split(":")[1]
    }
}
</script>
<template>
    <PageBase>
        <a-form layout="inline">
            <a-form-item label="用户名">
                <a-input v-model:value="formState.username" placeholder="请输入用户名" />
            </a-form-item>
            <a-form-item label="密码">
                <a-input v-model:value="formState.password" placeholder="请输入密码" />
            </a-form-item>
            <a-form-item label="加密/解密">
                <a-select v-model:value="formState.mode" style="width: 100px">
                    <a-select-option :value="1">加密</a-select-option>
                    <a-select-option :value="2">解密</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="toggleGenerate">生成/解密 Auth</a-button>
            </a-form-item>
        </a-form>
        <div style="margin-top: 16px;" v-if="formState.mode == 2">
            <a-textarea v-model:value="formState.basicCode" placeholder="请输入要解密的字符串" rows="2" />
        </div>
        <div style="margin-top: 16px;" v-else>
            <a-row>
                <a-col><a-typography-paragraph strong>加密字符串：</a-typography-paragraph></a-col>
                <a-col v-if="formState.basicCode"><a-typography-paragraph copyable>{{ formState.basicCode }}</a-typography-paragraph></a-col>
            </a-row>
            <a-row>
                <a-col><a-typography-paragraph strong>请求头格式：</a-typography-paragraph></a-col>
                <a-col v-if="formState.basicCode"><a-typography-paragraph copyable>{{ formState.basicCodeHeader }}</a-typography-paragraph></a-col>
            </a-row>
        </div>
    </PageBase>
</template>
