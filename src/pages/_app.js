/**
 * File: _app.js
 * Project: heb-takehome
 * File Created: Friday, 22nd July 2022 11:35:09 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday, 22nd July 2022 11:35:09 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider, useSelector } from 'react-redux'
import Theme from '../Theme'
import { GlobalStyles } from '../GlobalStyles'
import store from './store'
// containers
import LoginContainer from '../containers/Login/LoginContainer'
import OrdersContainer from '../containers/Orders/OrdersContainer'
import ProcureContainer from '../containers/Procure/ProcureContainer'
import SetAuthToken from '../util/SetAuthToken'


class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <Helmet>
                <title>{process.env.APP_TITLE}</title>
            </Helmet>
            <BrowserRouter>
                <Theme>
                    <GlobalStyles/>
                    <Routes>
                        <Route path='*' element={<Navigate to='/login' replace/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                        <Route path="/orders" element={<OrdersContainer/>}/>
                        <Route path="/procure" element={<ProcureContainer/>}/>
                    </Routes>
                </Theme>
            </BrowserRouter>
        </Provider>
    )
  }
}

export default App
