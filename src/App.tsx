import React from 'react';
import {IProps} from './Models';
import './styles/styles.styl';

const App = () => {
    return (
        <div className="cover-page standard-background">
            {/* Page Layer */}

            <div className="standardCentralSection">
            {/* Component Layer */}
                <div className="standardCentralSection__inner">
                    <h2 className="mainHeader">React firefly</h2>
                </div>
            {/* //Component Layer */}
            </div>

            {/* // Page Layer */}
        </div>
    )    
};

export default App;
