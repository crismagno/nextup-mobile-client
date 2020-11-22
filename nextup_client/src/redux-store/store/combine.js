import { combineReducers } from "redux";

import user from './../reducers/user'
import general from './../reducers/general'

export default combineReducers({
    user,
    general
})
