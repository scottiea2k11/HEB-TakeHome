/**
 * File: auth.routes.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 11:41:16 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 11:41:16 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

const express = require('express');
const { check, validationResult } = require('express-validator');
const axios = require('axios');
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require('config');
const token = config.get('jwtToken')


 router.post('/auth', [
  check('password', 'Password is required.').notEmpty(),
  check('username', 'Username is needed').notEmpty()
 ],async (req, res) => {
    const validationErrors = validationResult(req)

    if(!validationErrors.isEmpty()) return res.status(400).json({errors: validationErrors.array()})

    try {
        const {password, username} = req.body

        const body = JSON.stringify({password, username});

        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Connection': 'keep-alive',
            accept: 'application/json'
          }
        };

        axios.post('http://order-pizza-api.herokuapp.com/api/auth', body, config).then(response =>{
          var accessToken = response.data
          
          jwt.sign({'UserInfo':{'identity': 'test'}}, token, (err, access_token) => {
              if(err) throw err
              res.status(200).json({access_token})
            }
          )
          res.status(200).json(accessToken)
        }).catch((error) => {
          console.error(error)
          res.status(400).send(error)
        })
    } catch (err) {
      console.error(err);
      res.status(500).json(err).send( 'Server Error');
    }
  });

module.exports = router