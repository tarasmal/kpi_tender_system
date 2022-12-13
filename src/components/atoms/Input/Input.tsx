import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {InputProps} from "./Input.types";
import {border, color, flexbox, layout, space} from "styled-system";
import {primary} from "./Input.styles";

const StyledInput = styled.input<InputProps>`
    ${primary}
    ${space}
    ${flexbox}
    ${border}
    ${color}
    ${layout}
`

const Input = (
    {
        value,
        setValue,
        ...props
    }: InputProps
) => {

    return (
        // @ts-ignore
        <StyledInput value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} {...props}/>
    );
};

export default Input;
