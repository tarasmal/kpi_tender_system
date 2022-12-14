import React, {useState} from 'react';
import AuthTemplate from "../../templates/AuthTemplate/AuthTemplate";
import Input from "../../atoms/Input/Input";

const SignUp = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    return (
        <AuthTemplate
            header={'Sign up'}
            buttonText={'Sign up'}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            authHandler={() => {}}
            navigationText={'Already signed up? Sign up!'}
        >
            <Input value={confirmPassword} setValue={setConfirmPassword} placeholder={'Confirm password'}/>
        </AuthTemplate>
    );
};

export default SignUp;
