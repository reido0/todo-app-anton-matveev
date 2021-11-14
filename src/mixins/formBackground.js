import { css } from 'styled-components';
import {
    BACKDROP_FILTER_VALUE,
    PALLETE,
} from '../constants';

export const FormBackgroud = css`
    backdrop-filter: blur(${BACKDROP_FILTER_VALUE}px);
    background-color: ${PALLETE.WHITE_3};
    border-left: 1px solid ${PALLETE.WHITE_3};
    border-radius: 4px;
    border-top: 1px solid ${PALLETE.WHITE_3};
    box-shadow: 0px 5px 10px 2px ${PALLETE.GRAY_2};
    padding: 16px;
`;
