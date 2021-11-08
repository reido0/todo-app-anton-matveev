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
        description: 'Description',
        owner: '001',
        state: CARDS_STATE.TODO,
        timestamp: '',
        title: 'Title',
    },
];
