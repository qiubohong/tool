import { IToolType } from "../types"
import BasicAuth from "../pages/BasicAuth.vue"

const BasicAuthConfig: IToolType = {
    title: "生成Basic Auth",
    key: "basicauth",
    path: "/basicauth",
    description: "http基础认证密码生成,Basic Auth密码在线解密",
    component: BasicAuth,
}

export default BasicAuthConfig