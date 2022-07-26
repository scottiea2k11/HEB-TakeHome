/**
 * File: LoginFrame.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 1:29:16 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 1:29:16 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as s from './LoginFrame.styles'
import { InputStyle } from '../../components/Input'
import Button from '../../components/Button'
import { Title } from '../../components/Title'
import { Login } from '../../containers/Login/LoginActions'
import { useDispatch, useSelector } from 'react-redux'

const LoginFrame = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })

  const { hasToken } = useSelector(state => ({
    hasToken: state.auth.hasToken
  }))

  const onSubmitLogin = (e) => {
    e.preventDefault()
    dispatch(Login(loginForm))
  }

  const onFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (hasToken) navigate('../orders', { replace: true })
  }, [hasToken])
  return (
    <>
      <s.LoginFrame>
        <s.LoginForm onSubmit={onSubmitLogin}>
          <Title prime>
            {process.env.COMPANY}
          </Title>
          <s.LoginLabel>Username</s.LoginLabel>
          <InputStyle type='text' name='username' value={loginForm.username} onChange={(e) => onFormChange(e)} />
          <s.LoginLabel>Password</s.LoginLabel>
          <InputStyle type='password' name='password' value={loginForm.password} onChange={(e) => onFormChange(e)} />
          <Button title='Login' transparent={false} />
        </s.LoginForm>
      </s.LoginFrame>
    </>
  )
}

export default LoginFrame
