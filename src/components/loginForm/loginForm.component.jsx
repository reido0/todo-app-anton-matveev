import React, {
    useCallback,
    useRef,
    useState,
} from 'react';
import {
    Container,
    StyledButton,
    StyledInput,
} from './loginForm.styles';
import {
    SubTitle,
} from '../../mixins';

const LoginForm = ({ setLoginAndPassword }) => {
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const [loginError, setLoginError] = useState(false);

    const handleLoginButton = useCallback(() => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email && password) {
            setLoginError(false);
            setLoginAndPassword(email, password);

            return;
        }

        setLoginError(true);
    }, [
        setLoginError,
        setLoginAndPassword,
    ]);

    const handleInputChange = useCallback(() => {
        setLoginError(false);
    }, [setLoginError]);

    return (
        <Container>
            <SubTitle>
                Please enter Login and Password
            </SubTitle>
            <StyledInput
                onChange={handleInputChange}
                placeholder="Email"
                ref={emailRef}
                type="email"
            />
            <StyledInput
                onChange={handleInputChange}
                placeholder="Password"
                ref={passwordRef}
                type="Password"
            />
            {loginError && (
                <p>
                    Incorrect Login or Password!
                </p>
            )}
            <StyledButton onClick={handleLoginButton}>
                Login
            </StyledButton>
        </Container>
    );
};

export default React.memo(LoginForm);
