/**
 * File: NoticeReducers.js
 * Project: heb-takehome
 * File Created: Tuesday, 26th July 2022 11:56:11 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Tuesday, 26th July 2022 11:56:11 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import {
    SET_NOTICE,
    REMOVE_NOTICE
} from './NoticeActions'

const initialState = []

export default function (state = initialState, action) {
    const { type, payload } = action 

    switch (type) {
        case SET_NOTICE: 
            return [...state, payload]
        case REMOVE_NOTICE:
            return state.filter(notice => notice.id !== payload)
        default:
            return state
    }
}