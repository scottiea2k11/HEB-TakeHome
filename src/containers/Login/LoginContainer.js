/**
 * File: LoginContainer.js
 * Project: heb-takehome
 * File Created: Friday, 22nd July 2022 7:15:19 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday, 22nd July 2022 7:15:19 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022 TAG-U, Do All Labs
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import React from 'react'
import * as s from './LoginContainer.styles'

// Views
import LoginFrame from '../../views/login/LoginFrame'



const LoginContainer = () => {
  return (
    <s.LoginWrapper>
      <LoginFrame/>
    </s.LoginWrapper>
  )
}

export default LoginContainer