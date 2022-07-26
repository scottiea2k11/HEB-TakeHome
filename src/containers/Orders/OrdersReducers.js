/**
 * File: OrdersReducers.js
 * Project: heb-takehome
 * File Created: Monday, 25th July 2022 4:29:13 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Monday, 25th July 2022 4:29:13 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import {
  ORDER_POSTED,
  ORDER_FAILED,
  ORDER_DELETED,
  ORDERS_COLLECTED
} from './OrdersActions'

const initialState = {
  loading: true,
  orders: []
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ORDER_POSTED:
    case ORDER_FAILED:
    case ORDER_DELETED:
      return {
        ...state,
        loading: false
      }

    case ORDERS_COLLECTED:
      return {
        ...state,
        loading: false,
        orders: payload
      }
    default:
      return {
        ...state
      }
  }
}
