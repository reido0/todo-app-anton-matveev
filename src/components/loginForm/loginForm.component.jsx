import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    FormWrapper,
    FormWrapperBackground,
    RegisterButton,
    StyledButton,
    StyledInput,
    Title,
} from './loginForm.styles';
import {
    Container,
    ErrorMessage,
} from '../../mixins';
import { LoginIconStyled } from './loginForm.styles';
import {
    LOGIN_FORM_MESSAGES,
    ROUTES,
} from '../../constants';

const LoginForm = ({
    checkLoginAndPassword,
    isUserLogged,
    registerNewUser,
}) => {
    const history = useHistory();
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const userNameRef = useRef(null);
    const [loginError, setLoginError] = useState(false);
    const [hasUserExist, setHasUserExist] = useState(false);
    const [register, setRegister] = useState(false);

    const handleLoginButton = useCallback(() => {
        const login = emailRef.current.value;
        const password = passwordRef.current.value;

        if (login && password) {
            if (register) {
                const userName = userNameRef.current.value;

                registerNewUser({
                    userName,
                    login,
                    password,
                });

                return;
            } else {
                setLoginError(false);
                setHasUserExist(true);

                checkLoginAndPassword({
                    login,
                    password,
                });

                return;
            }
        }

        setLoginError(true);
        setHasUserExist(false);
        setRegister(false);
    }, [
        checkLoginAndPassword,
        register,
        registerNewUser,
        setHasUserExist,
        setLoginError,
        setRegister,
    ]);

    const handleInputChange = useCallback(() => {
        setLoginError(false);
    }, [setLoginError]);

    useEffect(() => {
        if (isUserLogged) {
            history.push(ROUTES.CARDS);
        }
    }, [
        history,
        isUserLogged,
    ]);

    return (
        <Container>
            <FormWrapperBackground>
                <Title>
                    Welcome:)
                </Title>
                <FormWrapper>
                    {register && (
                        <StyledInput
                            onChange={handleInputChange}
                            placeholder="User Name"
                            ref={userNameRef}
                            type="text"
                        />
                    )}
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
                    {loginError && !register && (
                        <ErrorMessage>{LOGIN_FORM_MESSAGES.INCORRECT}</ErrorMessage>
                    )}
                    {hasUserExist && !isUserLogged && !register && (
                        <>
                            <ErrorMessage>{LOGIN_FORM_MESSAGES.NOT_FOUND}</ErrorMessage>
                            <ErrorMessage>Please, <RegisterButton onClick={() => setRegister(true)}>register</RegisterButton>!</ErrorMessage>
                        </>
                    )}
                    <StyledButton onClick={handleLoginButton}>
                        {register ? 'Register new user' : 'Login'}
                        <LoginIconStyled />
                    </StyledButton>
                </FormWrapper>
            </FormWrapperBackground>
        </Container>
    );
};

LoginForm.propTypes = {
    checkLoginAndPassword: PropTypes.func,
    isUserLogged: PropTypes.bool,
    registerNewUser: PropTypes.func,
};

export default React.memo(LoginForm);
