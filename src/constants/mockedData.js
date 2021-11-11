export const MOCKED_USERS = [
    {
        id: '001',
        login: 'antonm@email.com',
        password: '123',
        userName: 'Anton M',
    },
    {
        id: '002',
        login: 'xeon@email.com',
        password: '123',
        userName: 'Xeon',
    }
];

export const CARDS_STATE = {
    DONE: 'done',
    IN_PROGRESS: 'in_progress',
    TODO: 'todo',
};

export const MOCKED_CARDS = [
    {
        id: '001',
        owner: '001',
        state: CARDS_STATE.TODO,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 0',
        timestamp: '',
        userName: 'Anton M',
    },
    {
        id: '002',
        owner: '002',
        state: CARDS_STATE.TODO,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 1',
        timestamp: '',
        userName: 'Anton M',
    },
    {
        id: '003',
        owner: '001',
        state: CARDS_STATE.IN_PROGRESS,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 2',
        timestamp: '',
        userName: 'Anton M',
    },
    {
        id: '004',
        owner: '001',
        state: CARDS_STATE.IN_PROGRESS,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 3',
        timestamp: '',
        userName: 'Anton M',
    },
    {
        id: '005',
        owner: '002',
        state: CARDS_STATE.DONE,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        title: 'title 4',
        timestamp: '',
        userName: 'Anton M',
    },

];
