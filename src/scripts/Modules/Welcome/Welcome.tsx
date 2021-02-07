import React, {FunctionComponent} from 'react';

interface IWelcomeProps {}

const Welcome: FunctionComponent<IWelcomeProps> = (props) => {
    return (
        <div className="standard-central-section">
            <div className="standard-central-section__inner">
                <h1 className="mainHeader">React firefly</h1>
                <h3 className="main-description">Webpack engine with installed Stylus, React 17 with Typescript and es6. Ready for plugin or simple site development</h3>
                <a className="link" href="https://github.com/DenTivor/react-firefly" target="_blank">Download</a>
            </div>
        </div>
    )
}

export { Welcome, IWelcomeProps };