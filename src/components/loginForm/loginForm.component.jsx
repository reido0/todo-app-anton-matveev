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
    StyledContainer,
    StyledInput,
} from './loginForm.styles';
import {
    SubTitle,
} from '../../mixins';
import { LoginIconStyled } from './loginForm.styles';
import { ROUTES } from '../../constants';

const LoginForm = ({
    isUserLogged,
    setLoginAndPassword,
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

            setLoginAndPassword({
                login: email,
                password,
            });

            return;
        }

        setLoginError(true);
        setHasUserExist(false);
    }, [
        setHasUserExist,
        setLoginAndPassword,
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
        <StyledContainer>
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
                {hasUserExist && !isUserLogged && (
                    <FormErrorText>
                        User or Password not found!
                    </FormErrorText>
                )}
                <StyledButton onClick={handleLoginButton}>
                    Login
                    <LoginIconStyled />
                </StyledButton>
            </FormWrapper>
        </StyledContainer>
    );
};

LoginForm.propTypes = {
    isUserLogged: PropTypes.bool,
    setLoginAndPassword: PropTypes.func,
};

export default React.memo(LoginForm);
