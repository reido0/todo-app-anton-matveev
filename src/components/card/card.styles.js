import styled from 'styled-components';
import { PALLETE } from '../../constants';
import { Button } from '../../mixins';

export const Container = styled.div`
    background-color: ${PALLETE.GRAY_1};
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

export const ButtonEdit = styled(Button)`
    background-color: ${PALLETE.BLUE};
`;

export const ButtonState = styled(ButtonEdit)`
    & + & {
        margin-left: 10px;
    }
`;

export const ButtonDelete = styled(Button)`
    background-color: ${PALLETE.RED_1};
`;

export const Title = styled.p`
    color: ${PALLETE.BLACK};
    font-family: 'Poppins';
    font-size: 10px;
    margin-top: 10px;
    opacity: .4;
`;

export const Description = styled.p`
    background-color: ${PALLETE.WHITE};
    border-radius: 4px;
    font-size: 14px;
    font-family: 'Poppins';
    margin-top: 10px;
    padding: 5px;
`;

export const TaskName = styled(Description)`
    font-weight: bold;
`;
