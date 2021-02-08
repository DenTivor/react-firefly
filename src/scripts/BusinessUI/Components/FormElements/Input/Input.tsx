import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { ColProps } from 'react-bootstrap/esm/Col';

interface IInputProps {
  controlId: string
  inputParams: ColProps
  label: string
  labelParams: ColProps
  type?: string
  placeholder?: string
}

const Input = ({
  controlId,
  inputParams,
  label,
  labelParams,
  type = 'text',
  placeholder = '',
}: IInputProps) => {
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column {...labelParams}>
        {label}
      </Form.Label>
      <Col {...inputParams}>
        <Form.Control type={type} placeholder={placeholder} />
      </Col>
    </Form.Group>
  )
}

export { IInputProps, Input };