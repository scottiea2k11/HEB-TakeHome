/**
 * File: routes.orders.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 11:40:43 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 11:40:43 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
const express = require('express')
const { check, validationResult } = require('express-validator')
const axios = require('axios')
const router = express.Router()
const config = require('config')
const token = config.get('jwtToken')

router.get('/orders', async (req, res) => {
  axios.get('http://order-pizza-api.herokuapp.com/api/orders').then(response => {
    res.status(200).json(response.data)
  }).catch((error) => {
    res.status(500).json(error).send('Server Error.')
  })
})

router.post('/orders', [
  check('Crust', 'Crust is needed.').notEmpty(),
  check('Flavor', 'Flavor is needed').notEmpty(),
  check('Size', 'Size is needed').notEmpty(),
  check('Table_No', 'Table Number is needed').notEmpty()
],

async (req, res) => {
  const validationErrors = validationResult(req)

  if (!validationErrors.isEmpty()) return res.status(400).json({ errors: validationErrors.array() })

  try {
    const password = 'test'
    const username = 'test'
    const bodyTwo = JSON.stringify({password, username})
    const configTwo = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    await axios.post('https://order-pizza-api.herokuapp.com/api/auth', bodyTwo, configTwo).then(response => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${response.data.access_token}`
        }
      }
      axios.post('https://order-pizza-api.herokuapp.com/api/orders', req.body, config)
      res.status(200).json({msg: 'Order Submitted'})
    })
  } catch (error) {
    console.dir(error)
    res.status(400).json(error.data)
  }
})

router.delete('/orders', async (req, res) => {
  try {
    const { Order_ID } = req.body
    axios.delete(`http://order-pizza-api.herokuapp.com/api/orders/${Order_ID}`).then(response => {
      res.status(200).json(response.data)
    })
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
