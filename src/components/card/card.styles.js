import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ccc;
    border-radius: 6px;
    flex-shrink: 0;
    margin-top: 10px;
    overflow: hidden;
`;

export const Controls = styled.div`
    margin-top: 10px;
`;

export const StateButton = styled.button`
    background-color: blue;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 9px;
    padding: 5px;
    text-transform: uppercase;

    & + & {
        margin-left: 10px;
    }

    &:disabled {
        opacity: .2;
    }
`;

export const Title = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

export const Description = styled.p`
    font-size: 14px;
`;
