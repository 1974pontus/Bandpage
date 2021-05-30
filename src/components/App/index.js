import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.scss';
import Home from '../../pages';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </Router>
    )
}

export default App;
