import {CssProps} from "../../../types/styles.types";

export type InputConfigProps = {
    placeholder: string,
}

export type InputProps =
    & Partial<CssProps & InputConfigProps>
    & Required<{
    value: string
    setValue: Function,
}>
