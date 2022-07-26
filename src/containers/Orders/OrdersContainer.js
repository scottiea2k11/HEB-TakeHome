/**
 * File: OrdersContainer.js
 * Project: heb-takehome
 * File Created: Friday, 22nd July 2022 7:15:27 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday, 22nd July 2022 7:15:27 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022 TAG-U, Do All Labs
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrdersStart from '../../views/orders/OrdersStart'
import OrdersTable from '../../views/orders/OrdersTable'
import { GetOrders } from './OrdersActions'


import * as s from './OrdersContainers.styles'

const OrdersContainer = props => {
  const dispatch = useDispatch()

  const { Orders } = useSelector(state => ({
    Orders: state.order.orders
  }))

  useEffect(() => {
    dispatch(GetOrders())
  }, [])


  return (
    <>
      <s.OrdersWrapper>
        <OrdersStart/>
          <OrdersTable orders={Orders}/>
      </s.OrdersWrapper>
    </>
  )
}


export default OrdersContainer