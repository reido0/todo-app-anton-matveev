import styled from 'styled-components';
import BackGroundImg from '../../assets/img/bg.jpg';
import { Title } from '../cards-column/cards-column.styles';
import { Container } from '../../mixins';

export const StyledContainer = styled(Container)`
    
`;

export const CardsColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
`;

export const AddNewCard = styled(Title)`
    width: 100%;
    height: 50px;
    color: black;
    cursor: pointer;
    text-align: center;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.4);
`;