import { IToolType } from "../types"
import AntDColor from "../pages/AntDColor.vue"

const AntDColorConfig: IToolType = {
    title: "AntDesign的设计色彩",
    key: "AntDColor",
    path: "/AntDColor",
    description: "Ant Design 将色彩体系解读成两个层面：系统级色彩体系和产品级色彩体系。",
    component: AntDColor,
}

export default AntDColorConfig