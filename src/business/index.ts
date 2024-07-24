import { IToolType } from "../types";
import DiffConfig from "./Diff";
import JsonFormatConfig from "./JsonFormat";
import BasicAuthConfig from "./BasicAuth";
import AntDColorConfig from "./AntDColor";

const ToolList: IToolType[] = [
    JsonFormatConfig,
    DiffConfig,
    BasicAuthConfig,
    AntDColorConfig,
]

export default ToolList;