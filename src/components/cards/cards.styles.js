import styled from 'styled-components';
import BackGroundImg from '../../assets/img/bg.jpg';
import {
    Container,
} from '../../mixins';

export const StyledContainer = styled(Container)`
    backdrop-filter: blur(5px);
    &:before{
    content: '';
    position: fixed;
    left: 0; 
    right: 0;
    top: 0; 
    bottom: 0;
    z-index: -1;
    background: url(${BackGroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
    }
`;
