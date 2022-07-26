/**
 * File: Theme.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 12:27:37 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 12:27:37 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#FC7753',
    secondary: '#66D7D1',
    third: '#403D58',
    white: '#FFFFFF',
    textprime: '#333333',
    textsecond: '#F2EFEA',
    textinvert: '#FFFFFF'
  },
  size: {
    xs: 'max-width: 375px',
    s: 'max-width: 425px',
    m: 'max-width: 768px',
    lg: 'max-width: 1024px'
  },
  alertType: {
    success: '#FFE600',
    danger: '#333333',
    info: '#5BC0DE',
    warning: '#F0AD4E'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
