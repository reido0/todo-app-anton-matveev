import styled from 'styled-components';
import {
    Button,
    FormBackgroud,
} from '../../mixins';
import { PALLETE } from '../../constants';
import { ReactComponent as SignInIcon } from '../../assets/svg/signInIcon.svg';

const FORM_WRAPPER_WIDTH = 300;

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
    width: ${FORM_WRAPPER_WIDTH}px;
`;

export const StyledInput = styled.input`
    border-radius: 4px;
    border: 1px solid ${PALLETE.BLACK};
    font-size: 16px;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    outline: none;
    padding: 0 10px;
    width: 100%;
`;

export const StyledButton = styled(Button)`
    align-items: center;
    background-color: ${PALLETE.GREEN};
    display: flex;
    font-size: 16px;
    height: 30px;
    justify-content: space-between;
    line-height: 30px;
    margin-top: 10px;
    padding: 0 10px;
    text-transform: none;
    width: 100%;
`;

export const LoginIconStyled = styled(SignInIcon)`
    height: 20px;
`;

export const Title = styled.h2`
    color:${PALLETE.WHITE};
    font-weight: normal;
    text-align: center;
`;
