import React, {FunctionComponent} from 'react';
import {ShadowBox} from 'BusinessComponents';
import {Input} from 'BusinessComponents/FormElements';
import {IElementsListSectionProps, ElementsListSection} from './ElementsListSection';
import { Col, Form, Row } from 'react-bootstrap';

interface IElementsListProps {}

const ElementsList: FunctionComponent<IElementsListProps> = (props) => {
  return (
    <div className="standard-central-section half-width">
      <div className="standard-central-section__inner">
        <ShadowBox>
          <h2 className="header">Elements list</h2>
          <ElementsListSection title="Input">
            <Input
              controlId = 'formPlaintextEmail'
              inputParams = {{xs: 11}}
              label = 'Password'
              labelParams = {{xs: 1}}
              type = 'password'
            />
          </ElementsListSection>
        </ShadowBox>
      </div>
    </div>
  )
}

export { ElementsList, IElementsListProps };