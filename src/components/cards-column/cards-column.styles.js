import styled from 'styled-components';
import { PALLETE } from '../../constants';

export const Container = styled.div`
    align-self: flex-start;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    display: flex;
    flex-direction: column;
    margin: 20px;
    max-width: 304px;
    min-width: 304px;
    overflow-y: auto;
    padding: 16px;
`;

export const Title = styled.p`
    color: ${PALLETE.BLACK};
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: normal;
`;

export const EmptyState = styled(Title)`
    color: blue;
`;
