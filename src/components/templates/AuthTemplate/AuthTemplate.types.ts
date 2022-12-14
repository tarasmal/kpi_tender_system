import {ReactNode} from "react";

export type AuthTemplateProps = {
    children?: ReactNode
    email: string,
    setEmail: Function
    password: string,
    setPassword: Function,
    header: string,
    buttonText: string,
    authHandler: Function,
    navigationText: string,
    navigateTo: string,
}


