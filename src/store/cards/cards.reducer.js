import { MOCKED_CARDS } from '../../constants';

const initialState = {
    cards: MOCKED_CARDS,
};

export const cards = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        default:
            return state;
    };
};
