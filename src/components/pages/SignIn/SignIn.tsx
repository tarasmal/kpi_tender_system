import React, {useState} from 'react';
import AuthTemplate from "../../templates/AuthTemplate/AuthTemplate";

const SignIn = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <AuthTemplate
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            header={'Sign In'}
            buttonText={'Sign In'}
            authHandler={() => {}}
            navigationText={'Do not have an account? Sign up!'}
        />
    );
};

export default SignIn;
