/**
 * File: OrdersStart.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 11:24:26 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 11:24:26 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import * as s from './OrdersStart.styles.js'

import Button from '../../components/Button.js'

const OrdersStart = () => {
  return (
    <s.StartWrapper>
      <s.TextWrapper>
        <s.StartText>
          {process.env.START_ORDER_TEXT}
        </s.StartText>
      </s.TextWrapper>
      <s.ButtonWrapper>
        <Button prime={false} title={process.env.START_ORDER_BTN} transparent={false}/>
      </s.ButtonWrapper>
    </s.StartWrapper>
  )
}

export default OrdersStart