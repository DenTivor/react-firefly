import React, {FunctionComponent} from 'react';
import './coverPage.styl';

const CoverPage: FunctionComponent<{}> = (props) => {
    return (
        <div className="cover-page standard-background">
            {props.children}
        </div>
    )
}

export default CoverPage;