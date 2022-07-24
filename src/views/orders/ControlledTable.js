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
import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '../../components/Table'

const ControlledTable = ({...props}) => {
    const {data} = props;
  return (
    <Table >
        <Table.Head>
          <Table.TR>
              <Table.TH>Header 1</Table.TH>
              <Table.TH>Header 2</Table.TH>
              <Table.TH>Header 3</Table.TH>
          </Table.TR>
        </Table.Head>
        <Table.Body>
            <Table.TR>
              <Table.TH>data1</Table.TH>
              <Table.TH>data2</Table.TH>
              <Table.TH>data3</Table.TH>
            </Table.TR>
        </Table.Body>
    </Table>
  )
}

ControlledTable.propTypes = {}

export default ControlledTable