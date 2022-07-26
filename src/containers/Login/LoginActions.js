/**
 * File: LoginAction.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 11:14:24 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 11:14:24 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import axios from 'axios'
import SetAuthToken from '../../util/SetAuthToken'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const Login = (loginForm) => async (dispatch) => {
  try {
    const { username, password } = loginForm
    const body = JSON.stringify({ username, password })

    const config = {
      method: 'POST',
      url: '/routes/auth.routes/auth',
      headers: {
        'Content-Type': 'application/json'
      },
      data: body
    }

    await axios(config).then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      })
      if (localStorage.access_token) {
        SetAuthToken(localStorage.access_token)
      }
    })
      .catch(function (error) {
        console.log(error)
      })
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

export const Logout = () => async (dispatch) => {

}
