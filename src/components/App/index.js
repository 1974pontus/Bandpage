import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Startpage from '../Startpage';
import About from '../about';
import Shop from '../shop';
import Contact from '../contact';
import Footer from '../footer';
import './styles.scss';


const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Startpage} />
                    <Route path="/about" exact component={About} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>

            </Router>
            <Footer />
        </div>
    )
}

export default App;
