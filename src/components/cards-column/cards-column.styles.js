import styled from 'styled-components';
import { PALLETE } from '../../constants';
import { FormBackgroud } from '../../mixins';

export const Container = styled.div`
    ${FormBackgroud}

    align-self: flex-start;
    display: flex;
    flex-direction: column;
    margin: 20px;
    max-width: 304px;
    min-width: 304px;
    overflow-y: auto;
`;

export const Title = styled.p`
    color: ${PALLETE.BLACK};
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: normal;
`;

export const EmptyState = styled(Title)`
    color: ${PALLETE.BLUE};
`;
