import React, {FunctionComponent} from 'react'
import {CoverPage} from 'BusinessPages';
import {Welcome} from 'Modules';

const WelcomePage: FunctionComponent<{}> = () => {
  return (
    <CoverPage>
      <Welcome />
    </CoverPage>
  )
}

export {WelcomePage};