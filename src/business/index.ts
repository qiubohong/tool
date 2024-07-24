import { IToolType } from "../types";
import DiffConfig from "./Diff";
import JsonFormatConfig from "./JsonFormat";
import BasicAuthConfig from "./BasicAuth";

const ToolList: IToolType[] = [
    JsonFormatConfig,
    DiffConfig,
    BasicAuthConfig,
]

export default ToolList;