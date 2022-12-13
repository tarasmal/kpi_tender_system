import React, {ReactNode} from 'react';
import styled from "styled-components";
import {border, color, flexbox, layout, position, space, typography, FlexboxProps} from "styled-system";
import {CssProps} from "../../types/styles.types";

export const Flex = styled.div<FlexboxProps & Partial<CssProps> & {children: ReactNode}>`
  ${flexbox}
  ${border}
  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}
`

export default Flex;
