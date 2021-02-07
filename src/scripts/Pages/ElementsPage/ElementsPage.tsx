import React, {FunctionComponent} from 'react'
import {CoverPage} from 'BusinessPages';
import {ElementsList} from 'Modules';

const ElementsPage: FunctionComponent<{}> = () => {
  return (
    <CoverPage>
      <ElementsList />
    </CoverPage>
  )
}

export {ElementsPage};