/**
 * File: Table.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 12:05:01 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 12:05:01 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import styled from 'styled-components'

export const Table = ({ children, ...props }) => {
  return <StyledTable {...props}>{children}</StyledTable>
}

Table.Head = ({ children, ...props }) => {
  return <THead {...props}>{children}</THead>
}

Table.Body = ({ children, ...props }) => {
  return <Tbody {...props}>{children}</Tbody>
}

Table.TH = ({ children, ...props }) => {
  return <TH {...props}>{children}</TH>
}

Table.TR = ({ children, ...props }) => {
  return <TR {...props}>{children}</TR>
}

Table.TD = ({ children, ...props }) => {
  return <TD {...props}>{children}</TD>
}

const StyledTable = styled.table`
    overflow: scroll;
    scroll-behavior: smooth;
`

const THead = styled.thead`

`

const Tbody = styled.tbody`
    
`

const TR = styled.tr`
    margin:0rem 2rem;
    padding: 0.5rem;
`

const TH = styled.th`
    margin: 1rem;
    padding: 0.5rem;
`

const TD = styled.td`
    padding: 1rem;
`

const COL = styled.col``
