import styled from 'styled-components';
import { PALLETE } from '../../constants';

export const AVATAR_SIZE = 30;
export const LOGOUT_ZINDEX = 1;
export const SWITCHER_TOGGLER_SIZE = 20;
export const SWITCHR_TOGGLER_POSITION = 5;

export const Container = styled.header`
    align-items: center;
    display: flex;
    flex-shrink: 0;
    padding: 10px 20px;
    position: relative;
    width: 100%;
`;

export const UserButton = styled.div`
    align-items: center;
    background-color: ${PALLETE.WHITE};
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    margin-left: auto;
    padding: 5px 10px;
    position: relative;
    user-select: none;
    width: fit-content;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    display: block;
    height: ${AVATAR_SIZE}px;
    overflow: hidden;
    width: ${AVATAR_SIZE}px;
`;

export const UserName = styled.div`
    color: ${PALLETE.BLACK};
    font-size: 10px;
    margin-left: 10px;
`;

export const LogOutButton = styled.div`
    background-color: ${PALLETE.WHITE};
    border-radius: 5px;
    font-size: 10px;
    left: 0;
    margin-top: 70px;
    padding: 5px 10px;
    position: absolute;
    z-index: ${LOGOUT_ZINDEX};
`;

export const SwitcherToggler = styled.div`
    background-color: ${PALLETE.BLACK};
    border-radius: 50%;
    height: ${SWITCHER_TOGGLER_SIZE}px;
    position: absolute;
    top: ${SWITCHR_TOGGLER_POSITION}px;
    width: ${SWITCHER_TOGGLER_SIZE}px;
`;

export const Switcher = styled.div`
    background-color: ${PALLETE.WHITE};
    border-radius: 5px;
    cursor: pointer;
    width: 40px;
    height: 30px;
    position: relative;
    margin-right: 10px;

    ${SwitcherToggler} {
        ${props => props.isActive
        ? `left: ${SWITCHR_TOGGLER_POSITION}px`
        : `right: ${SWITCHR_TOGGLER_POSITION}px`
    }
    }
`;

export const SwitcherContainer = styled.div`
    align-items: center;
    color: ${props => props.theme.colors.cardTitle};
    display: flex;
    font-size: 14px;
`;
