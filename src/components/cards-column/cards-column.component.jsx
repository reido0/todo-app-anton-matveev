import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    EmptyState,
    Title,
} from './cards-column.styles';
import Card from '../card';

const CardsContainer = ({
    cards,
    title,
}) => (
    <Container>
        <Title>{title}</Title>
        {cards && (cards.length
            ? cards.map((card) => (
                <Card
                    description={card.description}
                    id={card.id}
                    key={card.id}
                    state={card.state}
                    title={card.title}
                />
                ))
            : <EmptyState>No {title}</EmptyState>)
        }
    </Container>
);

CardsContainer.propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
};

export default React.memo(CardsContainer);
