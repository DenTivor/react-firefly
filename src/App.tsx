import React from 'react';
// import {IProps} from '~Models/Models';
import {CoverPage} from 'Pages';
import {Welcome} from 'Modules';
import './styles/styles.styl';

const App = () => {
    return (
        <CoverPage>
            <Welcome />
        </CoverPage>
    )    
};

export default App;
