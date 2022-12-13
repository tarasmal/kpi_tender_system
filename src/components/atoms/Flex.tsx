import React, {ReactNode} from 'react';
import styled from "styled-components";
import {border, color, flexbox, layout, position, space, FlexboxProps} from "styled-system";
import {CssProps} from "../../styles/styles.types";

export const Flex = styled.div<FlexboxProps & Partial<CssProps> & {children: ReactNode}>`
  ${border};
  ${border};
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
`

export default Flex;
