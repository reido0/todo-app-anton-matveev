import React, {
    useEffect,
} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    Container,
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

    console.log(222, userId);

    return (
        <Container>
            QWE
        </Container>
    );
};

Cards.propTypes = {
    isUserLogged: PropTypes.bool,
    userId: PropTypes.string,
};

export default React.memo(Cards);
