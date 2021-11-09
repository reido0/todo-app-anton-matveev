import styled from 'styled-components';
import BackGroundImg from '../assets/img/bg.jpg';

export const Container = styled.div`
    align-items: center;
    background-image: url(${BackGroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: relative;
`;