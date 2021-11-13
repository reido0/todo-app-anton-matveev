import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    FormErrorText,
    FormWrapper,
    StyledButton,
    StyledInput,
} from './loginForm.styles';
import {
    Container,
    SubTitle,
} from '../../mixins';
import { LoginIconStyled } from './loginForm.styles';
import {
    LOGIN_FORM_MESSAGES,
    ROUTES,
} from '../../constants';

const LoginForm = ({
    isUserLogged,
    checkLoginAndPassword,
}) => {
    const history = useHistory();
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const [loginError, setLoginError] = useState(false);
    const [hasUserExist, setHasUserExist] = useState(false);

    const handleLoginButton = useCallback(() => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email && password) {
            setLoginError(false);
            setHasUserExist(true);

            checkLoginAndPassword({
                login: email,
                password,
            });

            return;
        }

        setLoginError(true);
        setHasUserExist(false);
    }, [
        setHasUserExist,
        checkLoginAndPassword,
        setLoginError,
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
                    <FormErrorText>{LOGIN_FORM_MESSAGES.INCORRECT}</FormErrorText>
                )}
                {hasUserExist && !isUserLogged && (
                    <FormErrorText>{LOGIN_FORM_MESSAGES.NOT_FOUND}</FormErrorText>
                )}
                <StyledButton onClick={handleLoginButton}>
                    Login
                    <LoginIconStyled />
                </StyledButton>
            </FormWrapper>
        </Container>
    );
};

LoginForm.propTypes = {
    isUserLogged: PropTypes.bool,
    checkLoginAndPassword: PropTypes.func,
};

export default React.memo(LoginForm);
