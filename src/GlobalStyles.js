/**
 * File: GlobalStyles.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 12:25:59 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 11:50:55 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${style => style.theme.colors.primary};
  }

  #root{
    height: 100vh;
  }

  a {
    color: ${style => style.theme.colors.primary};
    text-decoration: none;
  }
`
