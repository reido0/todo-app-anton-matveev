import React, {
    useCallback,
    useRef,
    useState,
} from 'react';
import {
    Container,
    FormWrapper,
    FormErrorText,
    StyledButton,
    StyledInput,
} from './loginForm.styles';
import {
    SubTitle,
} from '../../mixins';
import { LoginIconStyled } from './loginForm.styles';


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
                Welcome:)
            </SubTitle>
            <FormWrapper>
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
                    <FormErrorText>
                        Incorrect Login or Password!
                    </FormErrorText>
                )}
                <StyledButton onClick={handleLoginButton}>
                    Login
                    <LoginIconStyled />
                </StyledButton>
            </FormWrapper>
        </Container>
    );
};

export default React.memo(LoginForm);
