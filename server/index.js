/**
 * File: index.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 11:39:35 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 11:39:35 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
const config = require('config')
const express = require('express')
const path = require('path')
const BodyParser = require('body-parser')
const Bundler = require('parcel-bundler')
const { createProxyMiddleware } = require('http-proxy-middleware')

const PORT = process.env.PORT || 8000

const app = new express()
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: true }))
app.use('/routes/orders.routes', require('./routes/orders.routes'))
app.use('/routes/auth.routes', require('./routes/auth.routes'))

if (process.env.NODE_ENV === 'production') {
  console.info('Production enabled.')
  console.log('CWD' + path.join(__dirname))
  const bundler = new Bundler(
    path.join(__dirname, '..', 'client', 'index.html'), {
      cache: true
    }
  )

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
  })
  app.use(bundler.middleware())
  app.use(express.static(path.join(__dirname, '..')))
} else {
  console.info('Dev mode enabled.')

  const bundler = new Bundler(
    path.join(__dirname, '..', 'public', 'index.html'), {
      cache: true
    }
  )
  app.use(bundler.middleware())
  app.use(express.static(path.join(__dirname, '..', 'public', 'index.html')))
}

app.use('/routes', createProxyMiddleware({
  target: `http://localhost:${PORT}`
}))

app.listen(PORT, (error) => {
  if (!error) {
    console.info(`Express server running at localhost:${PORT}`)
  } else {
    console.error('Error mounting server.')
  }
})
