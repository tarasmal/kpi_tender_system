import React from 'react';
import {AuthTemplateProps} from "./AuthTemplate.types";
import Flex from "../../atoms/Flex";
import Input from "../../atoms/Input/Input";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import {Typography} from "../../atoms/Typography";
import {transparent} from "../../atoms/Button/Button.styles";
import {useNavigate} from "react-router";

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
        children,
        header,
        buttonText,
        email,
        setEmail,
        password,
        setPassword,
        authHandler,
        navigationText,
        navigateTo
    }: AuthTemplateProps
) => {
    const navigate = useNavigate()
    return (
        <StyledAuthTemplate
        >
            <Typography fontSize={'32px'}>{header}</Typography>
            <Input marginBottom={'10px'} value={email} setValue={setEmail} placeholder={'Email'} />
            <Input type={'password'} value={password} setValue={setPassword} placeholder={'Password'} />
            {children}
            <Button onClick={() => authHandler()}>
                {buttonText}
            </Button>
            <Button
                color={'#29A19C'}
                currentStyle={transparent}
                variant={'transparent'}
                onClick={() => navigate(navigateTo)}
            >
                {navigationText}
            </Button>

        </StyledAuthTemplate>
    );
};

export default AuthTemplate;
