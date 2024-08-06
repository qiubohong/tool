import { IToolType } from "../types";
import DiffConfig from "./Diff";
import JsonFormatConfig from "./JsonFormat";
import BasicAuthConfig from "./BasicAuth";
import AntDColorConfig from "./AntDColor";
import TiptapEditorConfig from "./TiptapEditor";

const ToolList: IToolType[] = [
    JsonFormatConfig,
    DiffConfig,
    BasicAuthConfig,
    AntDColorConfig,
    TiptapEditorConfig
]

export default ToolList;