import styled, { css } from 'styled-components';
import {
    Button,
    Container,
    Input,
} from '../../mixins';
import { PALLETE } from '../../constants';
import { ReactComponent as SignInIcon } from '../../assets/svg/signInIcon.svg';

export const LoginIconStyled = styled(SignInIcon)`
    height: 20px;
`;

export const LoginFormTopMargin = css`
    margin-top: 10px;
`;

export const LoginFormInputButton = css`
    border-radius: 4px;
    border: 1px solid ${PALLETE.BLACK};
    font-size: 16px;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
    outline: none;
    width: 100%;
`;

export const FormErrorText = styled.p`
    color: ${PALLETE.ERROR};
    margin-top: 10px;
`;

export const StyledContainer = styled(Container)`
`;

export const FormWrapper = styled.div`
    align-items: center;
    backdrop-filter: blur(5px);
    background-color: #fff6;
    border-radius: 4px;
    border: 1px solid ${PALLETE.BLACK};
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    padding: 0 10px 10px;
    width: 300px;
`;

export const StyledInput = styled(Input)`
    ${LoginFormTopMargin}
    ${LoginFormInputButton}
`;

export const StyledButton = styled(Button)`
   ${LoginFormTopMargin}
   ${LoginFormInputButton}
   align-items: center;
   background-color: ${PALLETE.BUTTON_FORM};
   padding: 0 10px;
`;
