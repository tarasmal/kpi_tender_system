import React, {useState} from 'react';
import AuthTemplate from "../../templates/AuthTemplate/AuthTemplate";

const SignUp = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <AuthTemplate
            header={'Sign up'}
            buttonText={'Sign up'}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            authHandler={() => {}}
            navigationText={'Already signed up? Login!'}
        />
    );
};

export default SignUp;
