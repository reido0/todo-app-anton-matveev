import styled from 'styled-components';
import { PALLETE } from '../constants';

export const Button = styled.button`
    border-radius: 4px;
    color: ${PALLETE.WHITE};
    cursor: pointer;
    font-size: 9px;
    padding: 5px;
    text-transform: uppercase;
    transition: .3s;

    &:hover {
        background-color: ${PALLETE.BLACK_3};
    }
    
    &:active {
        box-shadow: inset -2px -2px 3px ${PALLETE.WHITE_1}, inset 2px 2px 3px ${PALLETE.BLACK_2};
    }

    &:disabled {
        opacity: .2;
    }
`;
