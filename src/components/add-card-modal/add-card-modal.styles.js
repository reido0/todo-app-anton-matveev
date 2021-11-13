import styled from 'styled-components';
import { PALLETE } from '../../constants';
import { LoginFormInputButton } from '../loginForm/loginForm.styles';
import { Input } from '../../mixins';

export const Container = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, .8);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
`;

export const Modal = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid ${PALLETE.BLACK};
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 20px;
    width: 300px;
`;

export const StyledInput = styled(Input)`
    ${LoginFormInputButton}
`;

export const StyledTextArea = styled.textarea`
    border-radius: 4px;
    border: 1px solid ${PALLETE.BLACK};
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
    outline: none;
    padding: 0 10px;
    width: 100%;
`;

export const Controls = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const Button = styled.button`
    cursor: pointer;
    background-color: green;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    height: 27px;
    width: 66px;
    font-size: 10px;
    padding: 5px;
    text-transform: uppercase;
    &:active {
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
    }

    & + & {
        margin-left: 10px;
    }
`;

export const DiscardButton = styled(Button)`
    && {
        background-color: red;
    }
`;
