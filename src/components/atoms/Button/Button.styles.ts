import {css} from "styled-components";

export const primary = css`
  text-align: center;
  width: 150px;
  height: fit-content;
  border-radius: 5px;
  background-color: #bebeef;
  color: green;
  border: hidden;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

export const clicked = css`
  ${primary}
  &:hover {
    opacity: 0.8;
  }
`
export type VariantType = 'clicked'
export const defineVariant = (variant: VariantType) => {
  switch (variant){
    case "clicked":
      return clicked
    default:
      return primary
  }
}
