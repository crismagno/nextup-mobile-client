import React from "react";
import { useDispatch } from "react-redux";

const dispatch = useDispatch({})

const showSearch = isShow => {
    dispatch({
        type: 'CHANGE_MODE_SEARCH',
        payload: isShow
    })
}

export default {
    showSearch
}