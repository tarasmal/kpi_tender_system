import React, {useState} from 'react';
import {ButtonTypes} from "./Button.types";
import styled from "styled-components";
import {border, color, flexbox, layout, space} from "styled-system";
import {Text} from "../Text";
import {defineVariant} from "./Button.styles";

const StyledButton = styled.button<ButtonTypes>`
    ${props => defineVariant(props.variant!)}
    ${space}
    ${flexbox}
    ${border}
    ${color}
    ${layout}
`

const Button = (
    {
        children,
        onClick,
        textStyle,
        variant,
        ...props
    }: ButtonTypes
) => {
    const [clicked, setClicked] = useState<boolean>(false)
    const childrenNode = () => {
        return (
             typeof children === 'string' ?
                <Text>{children}</Text>
                :
                children
        )
    }
    return (
        <StyledButton
            onClick={onClick}
            variant={clicked ? 'clicked' : variant}
            onMouseDown={() => setClicked(true)}
            onMouseUp={() => setClicked(false)}
            {...props}
        >
            { childrenNode() }
        </StyledButton>
    );
};

export default Button;
