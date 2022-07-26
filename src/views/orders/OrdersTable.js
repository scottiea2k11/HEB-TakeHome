/*
 * File: OrdersTable
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 11:24:03 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 11:24:03 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React, { useState, useEffect } from 'react'
import * as s from './OrdersTable.styles'
import ControlledTable from './ControlledTable'
import ControlledSearch from './ControlledSearch'
import SupportingTitle from '../../components/SupportingTitle'
import { Search } from '../../util/SearchParser'
import { isEmpty } from 'lodash'

const OrdersTable = ({ ...props }) => {
  const { orders } = props
  const [searchVal, setSearchVal] = useState('')
  const [data, setData] = useState([])
  const handleChange = (e) => {
    setSearchVal(searchVal => searchVal = e.target.value)
  }

  useEffect(() => {
    async function searchArray (array, val) {
        const parsedData = await Search(array, val)
        setData(data => data = parsedData)
    }
    searchArray(orders, searchVal)
  }, [searchVal, orders])

  return (
    <s.TableWrapper>
      <SupportingTitle>{process.env.LIST_TITLE}</SupportingTitle>
      <ControlledSearch searchVal={searchVal} handleChange={handleChange} />
      <ControlledTable data={data} />
    </s.TableWrapper>
  )
}

export default OrdersTable
