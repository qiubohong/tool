<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';

import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Highlight from '@tiptap/extension-highlight'

import PageBase from '../components/PageBase.vue';

const basecontent = {
    type: 'doc',
    content: [
        {
            type: 'paragraph',
            "marks": [
                {
                    "type": "bold"
                },
                {
                    "type": "italic"
                }
            ],
            content: [
                {
                    type: 'text',
                    text: '请在这里输入内容',
                },
            ],
        },
    ],
}

const editor = useEditor({
    content: '',
    extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        Highlight,
    ],
    autofocus: 'end',
    onUpdate({ editor }) {
        const currentPane = panes.value.filter(pane => pane.key === activeKey.value)
        if (currentPane.length) {
            currentPane[0].content = editor.getJSON()
        }
        saveLocal();
    },
})

const panes = ref<{ title: string; key: string; content: any; closable?: boolean }[]>([
    { title: '编辑器1', key: '1', content: basecontent, closable: false },
]);
const activeKey = ref(panes.value[0].key);

watch(activeKey, (newVal) => {
    const currentPane = panes.value.filter(pane => pane.key === newVal)
    if (currentPane.length && editor.value) {
        editor.value.commands.setContent(currentPane[0].content)
        editor.value.chain().focus()
    }

})

const newTabIndex = ref(1);

const add = () => {
    activeKey.value = `newTab${++newTabIndex.value}`;
    panes.value.push({ title: '编辑器' + newTabIndex.value, content: basecontent, key: activeKey.value });
};

const remove = (targetKey: string) => {
    let lastIndex = 0;
    panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1;
        }
    });
    panes.value = panes.value.filter(pane => pane.key !== targetKey);
    if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
            activeKey.value = panes.value[lastIndex].key;
        } else {
            activeKey.value = panes.value[0].key;
        }
    }
};

const onEdit = (targetKey: string | MouseEvent, action: string) => {
    if (action === 'add') {
        add();
    } else {
        remove(targetKey as string);
    }
    saveLocal();
};

onMounted(() => {
    const localContent = localStorage.getItem('tiptap')
    if (localContent) {
        panes.value = JSON.parse(localContent)
        newTabIndex.value = panes.value.length
    }
    if (editor.value) {
        editor.value.commands.setContent(panes.value[0].content)
    }
})

const saveLocal = () => {
    localStorage.setItem('tiptap', JSON.stringify(panes.value))
}


onUnmounted(() => {
    saveLocal()
})

</script>
<template>
    <PageBase>
        <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit">
            <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
            </a-tab-pane>
        </a-tabs>
        <div style="background-color: #fff;min-height: 100px;margin-top: -16px">
            <editor-content :editor="editor" autofocus />
        </div>
    </PageBase>
</template>
<style>
.tiptap {
    caret-color: #6A00F5;
    border: 1px solid #f0f0f0;
    border-top: 0;
    border-radius: 4px;
    padding: 16px;

}

.tiptap:focus {
    outline: none;
}
</style>