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
import axios from "axios"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"



export const Login = (loginForm) => async (dispatch) => {
    try {
        const {username, password} = loginForm
        const body = JSON.stringify({username, password})

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("accept", "application/json");

        var raw = JSON.stringify({
        "password": "test",
        "username": "test"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors'
        };

        fetch("/auth", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
            } catch (error) {
                console.error(error)
                dispatch({
                    type: LOGIN_FAIL,
                })
            }
        }

export const Auth = (token) => async (dispatch) => {
    try {
        const token = axios.post().then(data => {
            return data
        })
    } catch (error) {
        console.error(error)
    }
}
