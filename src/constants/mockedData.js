export const MOCKED_USERS = [
    {
        id: '1',
        login: 'antonm@email.com',
        password: '123',
        userName: 'Anton M',
    },
    {
        id: '2',
        login: 'xeon@email.com',
        password: '123',
        userName: 'Xeon',
    },
    {
        id: '3',
        login: '1',
        password: '1',
        userName: 'Anton R',
    }
];

export const CARDS_STATE = {
    DONE: 'done',
    IN_PROGRESS: 'in_progress',
    TODO: 'todo',
};

export const MOCKED_CARDS = [
    {
        id: '1',
        owner: '1',
        state: CARDS_STATE.TODO,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 0',
    },
    {
        id: '2',
        owner: '2',
        state: CARDS_STATE.TODO,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 1',
    },
    {
        id: '3',
        owner: '1',
        state: CARDS_STATE.IN_PROGRESS,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 2',
    },
    {
        id: '4',
        owner: '1',
        state: CARDS_STATE.IN_PROGRESS,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 3',
    },
    {
        id: '5',
        owner: '2',
        state: CARDS_STATE.DONE,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 4',
    },
    {
        id: '6',
        owner: '3',
        state: CARDS_STATE.DONE,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 4',
    }
];
