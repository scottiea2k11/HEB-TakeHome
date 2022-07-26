/**
 * File: auth.js
 * Project: heb-takehome
 * File Created: Monday, 25th July 2022 12:52:32 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Monday, 25th July 2022 12:52:34 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
  const token = req.header('access_token')

  if (token) {
    return res.status(401).json({ msg: 'Missing token, authorization denied.' })
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtToken'))
    req.user = decoded.user
    req.token = config.get('jwtToken')
    next()
  } catch (error) {
    res.status(401).json({ msg: 'Token is invalid.' })
  }
}
