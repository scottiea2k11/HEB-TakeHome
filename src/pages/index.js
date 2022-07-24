/**
 * File: index.js
 * Project: heb-takehome
 * File Created: Friday, 22nd July 2022 7:28:40 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday, 22nd July 2022 7:28:40 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import  * as ReactDOM  from 'react-dom/client'
import App from './_app'
import 'dotenv/config'

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(<App/>);