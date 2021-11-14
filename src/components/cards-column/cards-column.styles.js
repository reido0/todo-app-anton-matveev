import styled from 'styled-components';
import { PALLETE } from '../../constants';
import { FormBackgroud } from '../../mixins';

const CARDS_CONTAINER_WIDTH = 304;

export const Container = styled.div`
    ${FormBackgroud}

    align-self: flex-start;
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: ${CARDS_CONTAINER_WIDTH}px;
    overflow-y: auto;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 20px auto;
    }
`;

export const Title = styled.p`
    color: ${PALLETE.BLACK};
    font-size: 18px;
    font-weight: normal;
`;

export const EmptyState = styled(Title)`
    color: ${PALLETE.BLUE};
`;
