import styled from "styled-components";
import {color, ColorProps, typography, TypographyProps} from "styled-system";

export type TextProps = Partial<TypographyProps & ColorProps>

export const Text = styled.p<TextProps>`
  ${typography}
  ${color}
`

