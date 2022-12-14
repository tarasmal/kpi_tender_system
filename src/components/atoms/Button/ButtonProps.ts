import {ClickTypes} from "../../../types/click.types";
import {CssProps} from "../../../types/styles.types";
import {ButtonHTMLAttributes} from "react";
import {TextProps} from "../Typography";
import {VariantType} from "./Button.styles";


export type ButtonProps =
    & Partial<CssProps & {textStyle: TextProps, variant: VariantType, currentStyle: any}>
    & Required<{children: any} & ClickTypes>
    & ButtonHTMLAttributes<HTMLButtonElement>
