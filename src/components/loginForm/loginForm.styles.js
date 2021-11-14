import styled, { css } from 'styled-components';
import {
    Button,
    FormBackgroud,
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
    font-family: "Poppins";
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

export const FormWrapperBackground = styled.div`
    ${FormBackgroud}
`;

export const FormWrapper = styled.div`
    align-items: center;
    background-color: ${PALLETE.WHITE};
    border-radius: 4px;
    border: 1px solid ${PALLETE.BLACK};
    
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
   background-color: ${PALLETE.GREEN};
   padding: 0 10px;
`;
