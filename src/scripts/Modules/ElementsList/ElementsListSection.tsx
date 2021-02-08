import React, {FunctionComponent} from 'react';

interface IElementsListSectionProps {
  title: string;
}

const ElementsListSection: FunctionComponent<IElementsListSectionProps> = (
  {children, title}
) => {
  return (
    <div className="elements-list__section">
      <h3 className="elements-list__element-header">{title}</h3>
      <div className="elements-list__element">
        {children}
      </div>
    </div>
  )
}

export {IElementsListSectionProps, ElementsListSection}