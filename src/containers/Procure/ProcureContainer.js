/**
 * File: ProcureContainer.js
 * Project: heb-takehome
 * File Created: Friday, 22nd July 2022 7:16:28 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday, 22nd July 2022 7:16:28 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022 TAG-U, Do All Labs
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../../components/Title'
import * as s from './ProcureContainer.styles'
import Procure from '../../views/procure/Procure'
import { PostOrder } from '../Orders/OrdersActions'

const ProcureContainer = props => {
  return (
    <>
      <s.ProcureWrapper>
        <s.TitleWrapper>
          <Title> {process.env.PROCURE_TITLE}</Title>
        </s.TitleWrapper>
        <Procure postOrder={PostOrder} />
      </s.ProcureWrapper>
    </>
  )
}

ProcureContainer.propTypes = {}

export default ProcureContainer
