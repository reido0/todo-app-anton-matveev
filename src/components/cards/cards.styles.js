import styled from 'styled-components';
import BackGroundImg from '../../assets/img/bg.jpg';
import Avatar from '../../assets/img/avatar.jpg';
import {
    Container,
} from '../../mixins';
import { PALLETE } from '../../constants';

export const StyledContainer = styled(Container)`
    backdrop-filter: blur(5px);
    flex-wrap: wrap;
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

export const StyledCard = styled.div`
.btn-card-edit {
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    transition: 0.1s;
    width: 100%;
}

.btn-card-edit i {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
    color: ${PALLETE.GRAY};
}

.btn-card-edit i:hover {
    background-color: #ffffff;
    border-radius: 4px;
    color: #000;
    height: 30px;
    transition: 0.3s;
    width: 30px;
}

.btn-card-edit i:active {
    border-radius: 4px;
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}

.card-item {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 5px 5px 8px -5px rgba(34, 60, 80, 0.6);
    color: ${PALLETE.BLACK};
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 16px;
    padding: 8px;
    width: 266px;

    &:hover {
    background-color: #e9e9e9;
    transition: 0.3s;
    }
}

.card-taskname-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-taskname {
    color: rgba(0, 0, 0, 0.7);
    font-size: 11px;
    line-height: 16px;
}

.card-taskname-status {
    color: rgba(226, 0, 0, 0.747);
    font-size: 11px;
}

.card-title-task,
.card-title-discription,
.card-title-username {
    color: rgba(0, 0, 0, 0.2);
    font-size: 11px;
    font-weight: normal;
}

.card-discription {
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    font-size: 11px;
    line-height: 16px;
    padding: 2px 4px;
}

.finish-date {
    color: ${PALLETE.GRAY};
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    margin: 8px 0px;
    text-align: start;
}

.card-username {
    color: ${PALLETE.GRAY};
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    margin: 0 8px;
}

.avatar {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.avatar-img {
    background-image: url(${Avatar});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    height: 32px;
    margin: 8px 0px;
    overflow: hidden;
    position: relative;
    width: 32px;
}

.card-btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-btn {
    background-color: rgba(0, 0, 0, 0.185);
    border-radius: 4px;
    cursor: pointer;
    font-size: 10px;
    font-weight: 500;
    padding: 4px;
    text-align: center;
    transition: 0.1s;

    &:hover {
        background-color: #000;
        color: #fff;
    }

    &:active {
        border-radius: 4px;
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
    }
}
`;
