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
        isDone: false,
        owner: '001',
        state: CARDS_STATE.TODO,
        taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        taskName: '0',
        timestamp: '',
        userName: 'Anton',
    },
    {
        isDone: false,
        owner: '001',
        state: CARDS_STATE.TODO,
        taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        taskName: '0',
        timestamp: '',
        userName: 'Anton',
    },
    {
        isDone: false,
        owner: '001',
        state: CARDS_STATE.IN_PROGRESS,
        taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        taskName: '0',
        timestamp: '',
        userName: 'Anton',
    },
    {
        isDone: false,
        owner: '001',
        state: CARDS_STATE.IN_PROGRESS,
        taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        taskName: '0',
        timestamp: '',
        userName: 'Anton',
    },
    {
        isDone: true,
        owner: '001',
        state: CARDS_STATE.DONE,
        taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        taskName: '0',
        timestamp: '',
        userName: 'Anton',
    },

];
