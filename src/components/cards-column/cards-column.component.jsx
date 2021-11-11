import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Title,
} from './cards-column.styles';
import Card from '../card';

const CardsContainer = ({
    cards,
    title,
}) => (
    <Container>
        <Title>{title}</Title>
        {cards && cards.length
            ? cards.map((card) => (
                <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                />
                ))
            : <p>No {title}</p>
        }
    </Container>
);

CardsContainer.propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
};

export default React.memo(CardsContainer);
