import styled from "styled-components";
import {color, flexbox, layout, position, space, typography} from "styled-system";
import {CssProps} from "../../types/styles.types";

export type TextProps = Partial<CssProps>

export const Typography = styled.p<TextProps>`
  ${flexbox};
  ${color};
  ${layout};
  ${position};
  ${space};
  ${typography};
  
`

