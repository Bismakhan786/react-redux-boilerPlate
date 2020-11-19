
const INITIAL_STATE = {
    users: [{
        name: 'BISMA',
        email: 'bisma@gmail.com',
    },
    {
        name: 'ZAINAB',
        email: 'zainab@gmail.com',
    }
]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SETDATA':
            return ({
                ...state,
                users: [...state.users, action.data],
                // users: 'data khali krdia hai'
                // users: [action.data]
            })
        default:
            return state;
    }
}