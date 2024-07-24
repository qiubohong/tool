<script setup lang="ts">
import PageBase from '/@/components/PageBase.vue'
import ColorPaletter from '/@/components/AntColor/ColorPaletter.vue'

</script>
<template>
    <PageBase>
        <a-typography-title>基础色板</a-typography-title>
        <a-typography-paragraph>Ant Design 的基础色板共计 120 个颜色，包含 12
            个主色以及衍生色。这些颜色基本可以满足中后台设计中对于颜色的需求。</a-typography-paragraph>
        <ColorPaletter />
    </PageBase>
</template>
