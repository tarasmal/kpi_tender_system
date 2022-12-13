import {ClickTypes} from "../../../types/click.types";
import {CssProps} from "../../../types/styles.types";
import {ButtonHTMLAttributes} from "react";
import {TextProps} from "../Text";
import {VariantType} from "./Button.styles";

export type ButtonTypes =
    & Partial<CssProps & {textStyle: TextProps, variant: VariantType}>
    & Required<{children: any} & ClickTypes>
    & ButtonHTMLAttributes<HTMLButtonElement>
