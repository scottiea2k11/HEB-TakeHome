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

export const ORDER_POSTED = "ORDER_POSTED"
export const ORDER_FAILED = "ORDER_FAILED"
export const ORDER_DELETED = "ORDER_DELETED"
export const ORDERS_COLLECTED = "ORDERS_COLLECTED"

export const GetOrders = () => async (dispatch) => {
    try {
        const res = await axios.get('/routes/orders.routes/orders')
        dispatch({
            type: ORDERS_COLLECTED,
            payload: res.data
        })
        console.log(res.data)
        return res.data;
    } catch (error) {
        const errors = err.response.data.errors
        if(errors) errors.array.forEach((err) => console.error(err))
    }
}

export const PostOrder = (form) => async (dispatch) => {
    try {
        const body = form;
        var config = {
            method: 'POST',
            url: '/routes/orders.routes/orders',
            headers: {
              'Content-Type': 'application/json'
            },
            data : body
        };

        await axios(config).then( response =>{
            dispatch({
                type: ORDER_POSTED
            })
            console.info(response.data.message)
        })
    }catch (error) {
        const errors = err.response.data.errors
        if(errors) errors.array.forEach((err) => console.error(err))
        dispatch({
            type: ORDER_FAILED
        })
    }
}

export const DeleteOrder = (Order_ID) => async (dispatch) => {
    try {
        const body = JSON.stringify({Order_ID})
        var config = {
            method: 'DELETE',
            url: '/routes/orders.routes/orders',
            headers: {
              'Content-Type': 'application/json'
            },
            data : body
        };
        await axios(config).then( response =>{
            dispatch({
                type: ORDER_DELETED
            })
            console.info(response.data.message)
        })
    }catch (error) {
        const errors = err.response.data.errors
        if(errors) errors.array.forEach((err) => console.error(err))
        dispatch({
            type: ORDER_FAILED
        })
    }
}