import React, {
    useEffect,
} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    StyledContainer,
} from './cards.styles';
import { ROUTES } from '../../constants';

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
            QWE
        </StyledContainer>
    );
};

Cards.propTypes = {
    isUserLogged: PropTypes.bool,
    userId: PropTypes.string,
};

export default React.memo(Cards);
