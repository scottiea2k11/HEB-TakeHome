/**
 * File: reducers.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 10:25:51 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 10:25:51 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import { combineReducers } from "redux";

// Reducers
import auth from "../containers/Login/LoginReducers";
import order from '../containers/Orders/OrdersReducers'

// Combine
export default combineReducers({
    auth,
    order
})