import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
    ElementsPage,
    WelcomePage
} from 'Pages';
import './styles/styles.styl';

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {/* <Route exact path="/" component={WelcomePage}/> */}
                    <Route exact path="/" component={ElementsPage}/>
                </Switch>
            </Suspense>
        </Router>
    )    
};

export default App;
