/**
 * File: LoginReducers.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 11:14:31 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 11:14:31 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './LoginActions'

const initialState = {
    loading: true,
    token: '',
    auth: false
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                auth: false,
                token: payload
            }
        case LOGIN_FAIL:
            return{
                ...state,
                loading: false,
                auth: false
            }
        default:
            return state
    }
}
