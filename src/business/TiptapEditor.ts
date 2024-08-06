import { IToolType } from "../types"
import TiptapEditor from "../pages/TiptapEditor.vue"

const TiptapEditorConfig: IToolType = {
    title: "TiptapEditor本地编辑器",
    key: "TiptapEditor",
    path: "/TiptapEditor",
    description: "无头富文本编辑器框架",
    component: TiptapEditor,
}

export default TiptapEditorConfig