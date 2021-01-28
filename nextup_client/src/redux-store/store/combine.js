import { combineReducers } from "redux";

import user from './../reducers/user'
import general from './../reducers/general'
import yourLine from './../reducers/yourLine'

export default combineReducers({
    user,
    general,
    yourLine
})
