import styled from "styled-components";
import {color, typography, TypographyProps} from "styled-system";

export const Text = styled.p<Partial<TypographyProps>>`
  ${typography}
  ${color}
`
