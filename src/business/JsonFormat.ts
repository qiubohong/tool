import { IToolType } from "../types"
import JsonFormat from "../pages/JsonFormat.vue"

const JsonFormatConfig: IToolType = {
    title: "Json格式化",
    key: "jsonFormat",
    path: "/jsonformat",
    description: "Json格式化",
    component: JsonFormat,
}

export default JsonFormatConfig