import React from 'react';
import {AuthTemplateProps} from "./AuthTemplate.types";
import Flex from "../../atoms/Flex";
import Input from "../../atoms/Input/Input";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import {Typography} from "../../atoms/Typography";
import {transparent} from "../../atoms/Button/Button.styles";

const StyledAuthTemplate = styled(Flex)`
  flex-direction: column;
  row-gap: 15px;
  height: 75%;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;

  box-shadow: 0 10px 25px rgba(29, 52, 54, 0.08);
  border-radius: 10px;
`

const AuthTemplate = (
    {
        header,
        buttonText,
        email,
        setEmail,
        password,
        setPassword,
        authHandler,
        navigationText
    }: AuthTemplateProps
) => {
    return (
        <StyledAuthTemplate
        >
            <Typography fontSize={'32px'}>{header}</Typography>
            <Input marginBottom={'10px'} value={email} setValue={setEmail} placeholder={'Email'} />
            <Input type={'password'} value={password} setValue={setPassword} placeholder={'Password'} />
            <Button onClick={() => authHandler()}>
                {buttonText}
            </Button>
            <Button color={'#29A19C'} currentStyle={transparent} variant={'transparent'} onClick={() => {}}>{navigationText}</Button>

        </StyledAuthTemplate>
    );
};

export default AuthTemplate;
