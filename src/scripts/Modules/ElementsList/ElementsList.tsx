import React, {FunctionComponent, useState} from 'react';
import {Alert, ShadowBox} from 'BusinessComponents';
import {Input} from 'BusinessComponents/FormElements';
import Button from 'react-bootstrap/Button';
import {IElementsListSectionProps, ElementsListSection} from './ElementsListSection';

interface IElementsListProps {}

const ElementsList: FunctionComponent<IElementsListProps> = (props) => {
  const [showAlert, setShowAlert] = useState(true);
  
  const setAlertShow = () => {
    setShowAlert(!showAlert);
  }

  return (
    <div className="standard-central-section half-width">
      <div className="standard-central-section__inner">
        <ShadowBox>
          <h2 className="header">Elements list</h2>
          <ElementsListSection title="Input">
            <Input
              controlId = 'formPassword'
              inputParams = {{xs: 11}}
              label = 'Password'
              labelParams = {{xs: 1}}
              type = 'password'
            />
            <Input
              controlId = 'formPlaintextInput'
              inputParams = {{xs: 11}}
              label = 'Text'
              labelParams = {{xs: 1}}
              type = 'text'
            />
          </ElementsListSection>
          <ElementsListSection title="Alert">
            <Alert
              show = {true}
              alertHeaderText = "Alert without external button binding"
            />
            <Alert
              show = {showAlert}
              alertHeaderText = "Alert with external button binding"
              showButton = {false}
            />
            <Button onClick={setAlertShow}>Show Alert</Button>
          </ElementsListSection>
        </ShadowBox>
      </div>
    </div>
  )
}

export { ElementsList, IElementsListProps };