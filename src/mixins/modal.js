import styled, { css } from 'styled-components';
import { PALLETE } from '../constants';
import { Button } from './button';

const MODAL_WIDTH = 300;

export const ModalContainer = styled.div`
    align-items: center;
    background-color: ${PALLETE.BLACK_1};
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
    background-color: ${PALLETE.WHITE};
    border-radius: 6px;
    border: 1px solid ${PALLETE.BLACK};
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 20px;
    width: ${MODAL_WIDTH}px;
`;

export const Controls = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const AddButton = styled(Button)`
    background-color: ${PALLETE.GREEN};
`;

export const CancelButton = styled(Button)`
    background-color: ${PALLETE.RED_1};
    margin-left: 10px;
`;

const InputStyles = css`
    border-radius: 4px;
    border: 1px solid ${PALLETE.BLACK};
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
    outline: none;
    padding: 0 10px;
    width: 100%;
`;

export const ModalInput = styled.input`
    ${InputStyles}

    height: 30px;
    line-height: 30px;
`;

export const ModalTextarea = styled.textarea`
    ${InputStyles}

    resize: none;
    font-family: 'Poppins', sans-serif;
`;
