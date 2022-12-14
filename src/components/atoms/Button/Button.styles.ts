import {css} from "styled-components";
const basicStyles = css`
  text-align: center;
  width: 150px;
  height: fit-content;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
export const primary = css`
  ${basicStyles};
  border-radius: 5px;
  background-color: #29A19C;
  color: white;
  border: hidden;
  
`
export const transparent = css`
  ${basicStyles};
  border: hidden;
  background-color: transparent;
`
export type VariantType = 'clicked' | 'transparent'
export const defineVariant = (variant: VariantType, mainStyle=primary) => {
  switch (variant){
    case "clicked":
      return css`
        ${mainStyle}
        &:hover {
          opacity: 0.8;
        }
      `
    case "transparent":
      return transparent
    default:
      return primary
  }
}
