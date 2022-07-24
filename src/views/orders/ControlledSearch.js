/**
 * File: ControlledSearch.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 12:49:25 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 12:49:25 pm
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
import { InputStyle } from '../../components/Input'

const ControlledSearch = ({...props}) => {

    const {searchVal, handleChange} = props

  return (
    <>
        <InputStyle placeholder='Search Orders.' value={searchVal} onChange={handleChange} />
    </>
  )
}

ControlledSearch.propTypes = {}

export default ControlledSearch