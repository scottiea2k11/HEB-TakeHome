/**
 * File: OrdersActions.js
 * Project: heb-takehome
 * File Created: Monday, 25th July 2022 4:29:04 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Monday, 25th July 2022 4:29:04 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import axios from 'axios'
import { setNotice } from '../../components/notice/NoticeActions'

export const ORDER_POSTED = 'ORDER_POSTED'
export const ORDER_FAILED = 'ORDER_FAILED'
export const ORDER_DELETED = 'ORDER_DELETED'
export const ORDERS_COLLECTED = 'ORDERS_COLLECTED'

export const GetOrders = () => async (dispatch) => {
  try {
    const res = await axios.get('/routes/orders.routes/orders')
    dispatch({
      type: ORDERS_COLLECTED,
      payload: res.data
    })
    return res.data
  } catch (error) {
    const errors = err.response.data.errors
    if (errors) errors.array.forEach((err) => console.error(err))
  }
}

export const PostOrder = (form) => async (dispatch) => {
  try {
    const body = form
    const config = {
      method: 'POST',
      url: '/routes/orders.routes/orders',
      headers: {
        'Content-Type': 'application/json'
      },
      data: body
    }

    await axios(config).then(response => {
      dispatch(setNotice(response.data.message, true))
      dispatch({
        type: ORDER_POSTED
      })
    }).catch(error => {
      const errors = error.response.data.errors
      if (errors.length > 0) errors.forEach(err => {dispatch(setNotice(err.msg, false))})
    })
  } catch (error) {
    dispatch(setNotice('Order failed.', false))
    dispatch({
      type: ORDER_FAILED
    })
  }
}

export const DeleteOrder = (Order_ID) => async (dispatch) => {
  try {
    const body = JSON.stringify({ Order_ID })
    const config = {
      method: 'delete',
      url: '/routes/orders.routes/orders',
      headers: {
        'Content-Type': 'application/json'
      },
      data: body
    }
    await axios(config).then(response => {
      dispatch({
        type: ORDER_DELETED
      })
      dispatch(setNotice(response.data.message, true))
    })
  } catch (error) {
    dispatch({
      type: ORDER_FAILED
    })
  }
}
