import yourLineExample from "./../../filesExample/yourLine";

const INITIAL_STATE = {
    items: [...yourLineExample.yourLine1]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_ITEM_YOUR_LINE':
            return { ...state, items: items.push(action.payload) };
        case 'REMOVE_ITEM_YOUR_LINE':
            let newItemsList = items.filter(item => item.id !== action.payload.id)
            return { ...state, items: newItemsList };
        default: 
            return state;
    };
};