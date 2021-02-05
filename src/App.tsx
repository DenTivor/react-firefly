import React from 'react';
import {IProps} from './Models';
import './styles/common.styl';

const App = (props: IProps) => <h2 className="mainHeader">{props?.title}</h2>;

export default App;
