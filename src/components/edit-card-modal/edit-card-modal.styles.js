import styled from 'styled-components';

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
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    padding: 20px;
    width: 300px;
`;

export const Controls = styled.div`
    margin-top: 10px;
`;

export const Button = styled.button`
    background-color: green;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 9px;
    padding: 5px;
    text-transform: uppercase;

    & + & {
        margin-left: 10px;
    }
`;

export const DiscardButton = styled(Button)`
    && {
        background-color: red;
    }
`;
