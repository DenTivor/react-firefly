import React, {FunctionComponent} from 'react';
import './shadowBox.styl'

enum EShadowBoxStyle {
    STANDARD = 'standard-style'
}

interface IShadowBox {
    style?: EShadowBoxStyle
}

const ShadowBox: FunctionComponent<IShadowBox> = ({children, style = EShadowBoxStyle.STANDARD}) => {
    return (
        <div className={`shadow-box ${style}`}>
            {children}
        </div>
    )
}

export {EShadowBoxStyle, IShadowBox, ShadowBox};