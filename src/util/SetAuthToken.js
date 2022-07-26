/**
 * File: SetAuthToken.js
 * Project: heb-takehome
 * File Created: Monday, 25th July 2022 3:12:36 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Monday, 25th July 2022 3:12:37 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */


import axios from 'axios';
import jwt from 'jsonwebtoken'

const SetAuthToken = access_token => {
    if(access_token) {
        axios.defaults.headers.common['access_token']
    } else {
        delete axios.defaults.headers.commmon['access_token']
    }
}

export default SetAuthToken