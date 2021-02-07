import React, {FunctionComponent} from 'react';
import {ShadowBox} from 'BusinessComponents'; 

interface IElementsListProps {}

const ElementsList: FunctionComponent<IElementsListProps> = (props) => {
    return (
        <div className="standard-central-section">
            <div className="standard-central-section__inner">
                <ShadowBox>
                    <h2 className="header">Elements list</h2>
                    <h3 className="main-description">Webpack engine with installed Stylus, React 17 with Typescript and es6. Ready for plugin or simple site development</h3>
                    <a className="link" href="https://github.com/DenTivor/react-firefly" target="_blank">Download</a>
                </ShadowBox>
            </div>
        </div>
    )
}

export { ElementsList, IElementsListProps };