import styled from 'styled-components';

export const Button = styled.button`
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.3s;
    &:hover {
    cursor: pointer;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.1);
    }
    :active {
    border-radius: 4px;
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
    }

`;