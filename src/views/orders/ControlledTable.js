/**
 * File: Table.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 12:45:57 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 12:45:57 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Table } from '../../components/Table'
import { orderBy } from 'lodash';

const ControlledTable = ({...props}) => {
  const {data} = props;
  const [headers, setHeaders] = useState([])
  const [rows, setRows] = useState([])

  useEffect(()=> {
    if(data.length > 0 || data[0] !== undefined){
      setHeaders((headers) => headers = Object.keys(data[0]))
      setRows((rows) => rows = Object.values(data))
    }
  },[data])
  return (
    <Table >
        <Table.Head>
            <Table.TR>
                {
                  headers.map((header, index) => (
                    <Table.TH key={index} children={header}/>
                  ))
                }
            </Table.TR>
        </Table.Head>
        <Table.Body>
          { rows !== undefined &&
            rows.map((item, index) => <TableRow key={index} item={item} column={headers}/>)
          }
        </Table.Body>
    </Table>
  )
}

const TableRow= ({item, column}) => (
  <Table.TR>
    {column.map((val, index) => {
      return <Table.TD key={index} children={item[`${val}`]}/>
    })
    }
  </Table.TR>
)

ControlledTable.propTypes = {}

export default ControlledTable