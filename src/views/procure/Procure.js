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
import { Selector } from '../../components/Selector'

const Procure = ({ ...props }) => {
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false)
  const [form, setForm] = useState({
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
      await setForm({ ...form, Table_No: Math.round(newTable) })
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
              <Selector name='Flavor'>
                <Selector.Option children='Meat' value='Meat'/>
                <Selector.Option children='Works' value='Works'/>
                <Selector.Option children='Vegan' value='Vegan'/>
              </Selector>
              <Selector name='Crust'>
                <Selector.Option children='THIN' value='THIN'/>
                <Selector.Option children='NORMAL' value='NORMAL'/>
                <Selector.Option children='THICK' value='THICK'/>
              </Selector>
              <Selector name='Size'>
                <Selector.Option children='S' value='S'/>
                <Selector.Option children='M' value='M'/>
                <Selector.Option children='L' value='L'/>
              </Selector>
            </s.FormCol>
            <s.FormCol flexPosition={3}>
              <SupportingTitle>Table Number</SupportingTitle>
              <SupportingTitle>{form.Table_No}</SupportingTitle>
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
