/**
 * File: CompleteOrderModal.js
 * Project: heb-takehome
 * File Created: Friday, 22nd July 2022 7:19:00 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday, 22nd July 2022 7:19:00 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022 TAG-U, Do All Labs
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import { Label } from '../../components/Forms'
import { Text } from '../../components/Content'
import Button from '../../components/Button'
import { Row } from '../../components/Row'
import { Col } from '../../components/Col'

const CompleteOrderModal = ({ ...props }) => {
  const { Name, Flavor, Crust, Size, Table_No } = props.form
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>{process.env.COMPLETE_TITLE}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Label>Name</Label>
            <Text>{Name}</Text>
          </Col>
          <Col>
            <Label>Flavor</Label>
            <Text>{Flavor}</Text>
          </Col>
          <Col>
            <Label>Crust</Label>
            <Text>{Crust}</Text>
          </Col>
          <Col>
            <Label>Size</Label>
            <Text>{Size}</Text>
          </Col>
          <Col>
            <Label>Table Number</Label>
            <Text>{Table_No}</Text>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Link to='/orders'>
          <Button title='Ok' />
        </Link>
      </Modal.Footer>
    </Modal>
  )
}

export default CompleteOrderModal
