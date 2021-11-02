import styled, { css } from 'styled-components';
import {
    Button,
    Input,
} from '../../mixins';

export const LoginFormTopMargin = css`
    margin-top: 10px;
`;

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
`;

export const StyledInput = styled(Input)`
    ${LoginFormTopMargin}
`;

export const StyledButton = styled(Button)`
   ${LoginFormTopMargin}
`;
