import styled from 'styled-components';
import { Title } from '../cards-column/cards-column.styles';
import {
    BACKDROP_FILTER_VALUE,
    PALLETE,
} from '../../constants';

export const CardsColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
`;

export const AddNewCard = styled(Title)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    height: 50px;
    color: ${PALLETE.BLACK};
    cursor: pointer;
    text-align: center;
    backdrop-filter: blur(${BACKDROP_FILTER_VALUE}px);
    background-color: ${PALLETE.WHITE_2};
`;
