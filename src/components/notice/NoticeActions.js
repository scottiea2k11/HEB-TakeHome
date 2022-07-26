/**
 * File: NoticeActions.js
 * Project: heb-takehome
 * File Created: Tuesday, 26th July 2022 11:55:40 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Tuesday, 26th July 2022 11:55:41 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */


export const SET_NOTICE = 'SET_NOTICE'
export const REMOVE_NOTICE = 'REMOVE_NOTICE'
import { v4 } from 'uuid'

export const setNotice = (msg, success, timeout = 3000) => dispatch => {
    const id = v4()
    dispatch({
        type: SET_NOTICE,
        payload: {msg, success, id}
    })

    setTimeout(() => dispatch({ type: REMOVE_NOTICE, payload: id}), timeout)
}
