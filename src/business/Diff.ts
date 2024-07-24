import { IToolType } from "../types"
import Diff from "../pages/Diff.vue"

const DiffConfig: IToolType = {
    title: "Diff对比差异",
    key: "diff",
    path: "/diff",
    description: "对比差异",
    component: Diff,
}

export default DiffConfig