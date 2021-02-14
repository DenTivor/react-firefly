import React, {useState, useEffect} from 'react';
import {Alert as NativeAlert} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

interface IAlertProps {
  alertHeaderText?: string
  onHideAlert?: Function
  show?: boolean
  showButton?: boolean
}

const Alert = ({
  alertHeaderText,
  onHideAlert,
  show = true,
  showButton = true,
}:IAlertProps) => {
  const [showAlert, setShowAlert] = useState(show);

  useEffect(() => {
    console.log('Mount');
    setShowAlert(show);
  }, [show]);

  const hideAlert = () => {
    if (!!onHideAlert) {
      onHideAlert();
    } else {
      setShowAlert(!showAlert)
    };
  }

  return (
    <>
      <NativeAlert show={showAlert} variant="success">
        {alertHeaderText && (<NativeAlert.Heading>{alertHeaderText}</NativeAlert.Heading>)}
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        {showButton && (
          <>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={hideAlert} variant="outline-success">
                Close me y'all!
              </Button>
            </div>
          </>
        )}
      </NativeAlert>
    </>
  )
}

export {IAlertProps, Alert}