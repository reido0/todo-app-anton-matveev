import styled from 'styled-components';
import BackGroundImg from '../assets/img/bg.jpg';

export const Container = styled.div`
    align-items: center;
    background: url(${BackGroundImg}) center center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    position: relative;
`;