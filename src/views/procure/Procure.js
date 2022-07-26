/**
 * File: Procure.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 1:42:43 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 1:42:43 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { InputStyle } from '../../components/Input'
import { Link } from 'react-router-dom'
import { Text } from '../../components/Content'
import CompleteOrderModal from '../modals/CompleteOrderModal'
import SupportingTitle from '../../components/SupportingTitle'
import Button from '../../components/Button'
import * as f from '../../components/Forms'
import * as s from './Procure.styles'

const Procure = ({ ...props }) => {
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false)
  const [form, setForm] = useState({
    Name: '',
    Flavor: '',
    Crust: '',
    Size: '',
    Table_No: 0
  })

  const onSubmitOrder = (e) => {
    e.preventDefault()
    dispatch(props.postOrder(form))
    const isValid = !Object.values(form).some(val => val === '')
    if (isValid) setModalShow(modalShow => modalShow = true)
  }

  const onChangeOrder = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    async function SetTableNum () {
      const min = 1
      const max = 50
      const newTable = min + Math.random() * (max - min)
      await setForm({ ...form, tableNumber: Math.round(newTable) })
    }
    SetTableNum()
  }, [])

  return (
    <>
      <s.ProcureWrapper>
        <s.FormWrapper>
          <f.FormGroup onSubmit={onSubmitOrder} onChange={(e) => onChangeOrder(e)}>
            <s.FormCol flexPosition={1}>
              <Text>{process.env.PROCURE_NOTICE}</Text>
            </s.FormCol>
            <s.FormCol flexPosition={2}>
              <InputStyle type='text' name='Name' placeholder='Name' value={form.name} />
              <InputStyle type='text' name='Flavor' placeholder='Flavor' value={form.flavor} />
              <InputStyle type='text' name='Crust' placeholder='Crust' value={form.crust} />
              <InputStyle type='text' name='Size' placeholder='Size' value={form.size} />
            </s.FormCol>
            <s.FormCol flexPosition={3}>
              <SupportingTitle>Table Number</SupportingTitle>
              <SupportingTitle>{form.tableNumber}</SupportingTitle>
              <Link to='/orders'>
                <Button title='Cancel' transparent />
              </Link>
              <Button title='Submit Order' transparent={false} />
            </s.FormCol>
          </f.FormGroup>
        </s.FormWrapper>
        <CompleteOrderModal show={modalShow} form={form} />
      </s.ProcureWrapper>
    </>
  )
}

Procure.propTypes = {}

export default Procure
