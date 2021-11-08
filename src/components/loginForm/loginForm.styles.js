import styled, { css } from 'styled-components';
import {
    Button,
    Input,
} from '../../mixins';
import { BLACK } from '../../constants';
import { RED } from '../../constants';
import BackGroundImg from '../../assets/img/bg.jpg';
import { ReactComponent as SignInIcon } from '../../assets/svg/signInIcon.svg';

export const LoginIconStyled = styled(SignInIcon)`
    height: 20px;
`;

export const LoginFormTopMargin = css`
    margin-top: 10px;
`;

export const LoginFormInputButton = css`
    border-radius: 4px;
    border: 1px solid ${BLACK};
    font-size: 16px;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
    outline: none;
    width: 100%;
`;

export const FormErrorText = styled.p`
    margin-top: 10px;
    color: ${RED};
`;

export const Container = styled.div`
    align-items: center;
    background-image: url(${BackGroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: relative;
`;

export const FormWrapper = styled.div`
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${BLACK};
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    padding: 0 10px 10px;
    width: 300px;
    /* backdrop-filter: blur(5px); */
`;

export const StyledInput = styled(Input)`
    ${LoginFormTopMargin}
    ${LoginFormInputButton}
`;

export const StyledButton = styled(Button)`
   ${LoginFormTopMargin}
   ${LoginFormInputButton}
   align-items: center;
   padding: 0 10px;

`;
