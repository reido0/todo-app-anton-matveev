import styled from 'styled-components';
import { PALLETE } from '../../constants';

export const Container = styled.div`
    background-color: #ccc;
    border-radius: 6px;
    flex-shrink: 0;
    margin-top: 10px;
    overflow: hidden;
    padding: 0px 10px 10px;
    width: 266px;
`;

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ButtonEdit = styled.button`
    background-color: blue;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 9px;
    padding: 5px;
    text-transform: uppercase;
`;

export const ButtonDelete = styled(ButtonEdit)`
    background-color: #ff5050;
    color: ${PALLETE.BLACK}
`;

export const StateButton = styled(ButtonEdit)`
    & + & {
        margin-left: 10px;
    }

    &:disabled {
        opacity: .2;
    }
`;

export const Title = styled.p`
    font-size: 10px;
    font-family: 'Poppins';
    color: ${PALLETE.BLACK};
    opacity: 0.4;
    margin-top: 10px;
`;

export const Description = styled.p`
    background-color: white;
    border-radius: 4px;
    font-size: 14px;
    font-family: 'Poppins';
    margin-top: 10px;
    padding: 5px;
`;

export const TaskName = styled(Description)`
    && {
        font-weight: bold;
    }
`;
