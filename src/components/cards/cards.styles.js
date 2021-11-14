import styled from 'styled-components';
import {
    BACKDROP_FILTER_VALUE,
    PALLETE,
} from '../../constants';

export const CardsColumnWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
`;

export const AddNewCard = styled.button`
    align-items: center;
    backdrop-filter: blur(${BACKDROP_FILTER_VALUE}px);
    background-color: ${PALLETE.WHITE_2};
    color: ${PALLETE.BLACK};
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    font-size: 18px;
    font-weight: normal;
    height: 50px;
    justify-content: center;
    text-align: center;
    width: 100%;
`;
