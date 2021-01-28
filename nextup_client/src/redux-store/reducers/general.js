const INITIAL_STATE = {
    modeSearch: true
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHANGE_MODE_SEARCH':
            return { ...state, modeSearch: action.payload };
        default: 
            return state;
    };
};