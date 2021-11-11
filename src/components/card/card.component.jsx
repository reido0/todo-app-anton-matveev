import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './card.styles';

const Card = ({
    description,
    title,
}) => (
    <Container>
       <p>{title}</p>
       <p>{description}</p>
    </Container>
);

Card.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};

export default React.memo(Card);
