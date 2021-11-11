import React, {
    useEffect,
} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    StyledContainer,
    StyledCard,
} from './cards.styles';
import { ROUTES } from '../../constants';
import { MOCKED_CARDS } from '../../constants';
// import { MOCKED_USERS } from '../../constants';
import { CARDS_STATE } from '../../constants';

const Cards = ({
    isUserLogged,
    userId,
}) => {
    const history = useHistory();

    useEffect(() => {
        if (!isUserLogged) {
            history.push(ROUTES.LOGIN);
        }
    }, [
        history,
        isUserLogged,
    ]);

    console.log(222, `user ${userId}`);

    return (
        <StyledContainer>
            <div>
                <p>todo list</p>
                {MOCKED_CARDS.map((card) => {
                    if (card.owner === userId && card.state === CARDS_STATE.TODO) {
                        return (
                            <StyledCard key={card.id}>
                                <div className={"card-item"}>
                                    <button className={"btn-card-edit"}>
                                        <i className={"fas fa-pencil-alt"}></i>
                                    </button>
                                    <p className={"card-title-task"}>Task:</p>
                                    <div className={"card-taskname-wrapper"}>
                                        <p className={"card-taskname"}>{`${card.taskName}`}</p>
                                        <p className={"card-taskname-status"}>{`${card.isDone ? 'done' : 'not done'}`}</p>
                                    </div>
                                    <p className={"card-title-discription"}>Discription:</p>
                                    <p className={"card-discription"}>{`${card.taskDescription}`}</p>
                                    <p className={"finish-date"}>Date: {new Date().toDateString()}</p>
                                    <div className={"avatar"}>
                                        <p className={"card-title-username"}>User name:</p>
                                        <p className={"card-username"}>{`${card.userName}`}</p>
                                        <div className={"avatar-img"}>
                                        </div>
                                    </div>
                                    <div className={"card-btn-wrapper"}>
                                        <button className={"card-btn"}>MoveUp</button>
                                        <button className={"card-btn"}>MoveDown</button>
                                        <button className={"card-btn"}>To Do</button>
                                        <button className={"card-btn"}>In Progress</button>
                                        <button className={"card-btn"}>Done</button>
                                        <button className={"card-btn"}>Delete</button>
                                    </div>
                                </div>
                            </StyledCard>
                        );
                    }
                    return null;
                })}
            </div>
            <div>
                <p>in progress list</p>
                {MOCKED_CARDS.map((card) => {
                    if (card.owner === userId && card.state === CARDS_STATE.IN_PROGRESS) {
                        return (
                            <StyledCard key={card.id}>
                                <div className={"card-item"}>
                                    <button className={"btn-card-edit"}>
                                        <i className={"fas fa-pencil-alt"}></i>
                                    </button>
                                    <p className={"card-title-task"}>Task:</p>
                                    <div className={"card-taskname-wrapper"}>
                                        <p className={"card-taskname"}>{`${card.taskName}`}</p>
                                        <p className={"card-taskname-status"}>{`${card.isDone ? 'done' : 'not done'}`}</p>
                                    </div>
                                    <p className={"card-title-discription"}>Discription:</p>
                                    <p className={"card-discription"}>{`${card.taskDescription}`}</p>
                                    <p className={"finish-date"}>Date: {new Date().toDateString()}</p>
                                    <div className={"avatar"}>
                                        <p className={"card-title-username"}>User name:</p>
                                        <p className={"card-username"}>{`${card.userName}`}</p>
                                        <div className={"avatar-img"}>
                                        </div>
                                    </div>
                                    <div className={"card-btn-wrapper"}>
                                        <button className={"card-btn"}>MoveUp</button>
                                        <button className={"card-btn"}>MoveDown</button>
                                        <button className={"card-btn"}>To Do</button>
                                        <button className={"card-btn"}>In Progress</button>
                                        <button className={"card-btn"}>Done</button>
                                        <button className={"card-btn"}>Delete</button>
                                    </div>
                                </div>
                            </StyledCard>
                        );
                    }
                    return null;
                })}
            </div>
            <div>
                <p>done list</p>
                {MOCKED_CARDS.map((card) => {
                    if (card.owner === userId && card.state === CARDS_STATE.DONE) {
                        return (
                            <StyledCard key={card.id}>
                                <div className={"card-item"}>
                                    <button className={"btn-card-edit"}>
                                        <i className={"fas fa-pencil-alt"}></i>
                                    </button>
                                    <p className={"card-title-task"}>Task:</p>
                                    <div className={"card-taskname-wrapper"}>
                                        <p className={"card-taskname"}>{`${card.taskName}`}</p>
                                        <p className={"card-taskname-status"}>{`${card.isDone ? 'done' : 'not done'}`}</p>
                                    </div>
                                    <p className={"card-title-discription"}>Discription:</p>
                                    <p className={"card-discription"}>{`${card.taskDescription}`}</p>
                                    <p className={"finish-date"}>Date: {new Date().toDateString()}</p>
                                    <div className={"avatar"}>
                                        <p className={"card-title-username"}>User name:</p>
                                        <p className={"card-username"}>{`${card.userName}`}</p>
                                        <div className={"avatar-img"}>
                                        </div>
                                    </div>
                                    <div className={"card-btn-wrapper"}>
                                        <button className={"card-btn"}>MoveUp</button>
                                        <button className={"card-btn"}>MoveDown</button>
                                        <button className={"card-btn"}>To Do</button>
                                        <button className={"card-btn"}>In Progress</button>
                                        <button className={"card-btn"}>Done</button>
                                        <button className={"card-btn"}>Delete</button>
                                    </div>
                                </div>
                            </StyledCard>
                        );
                    }
                    return null;
                })}
            </div>
        </StyledContainer >
    );
};

Cards.propTypes = {
    isUserLogged: PropTypes.bool,
    userId: PropTypes.string,
};

export default React.memo(Cards);
