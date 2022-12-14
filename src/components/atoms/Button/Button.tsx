import React, {useState} from 'react';
import {ButtonProps} from "./ButtonProps";
import styled from "styled-components";
import {border, color, flexbox, layout, space} from "styled-system";
import {Typography} from "../Typography";
import {defineVariant} from "./Button.styles";

const StyledButton = styled.button<ButtonProps>`
    ${props => defineVariant(props.variant!, props.currentStyle!)}
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
    }: ButtonProps
) => {
    const [clicked, setClicked] = useState<boolean>(false)
    const childrenNode = () => {
        return (
             typeof children === 'string' ?
                <Typography>{children}</Typography>
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
