<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
const emit = defineEmits(['copy'])

const copy = () => {
    navigator.clipboard.writeText(props.text)
    emit('copy', props.text)
}
</script>
<template>
    <div @click="copy">
        <slot></slot>
    </div>
</template>