import React from 'react';
import Header from './components/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import ListOrder from './components/ListOrder';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <BrowserRouter >
            <div className="App" >
                <Switch >
                    <Route path="/order" >
                        <ListOrder/>
                    </Route>
                    <Route path="/register" >
                        <Register/>
                    </Route>
                    < Route path='/login' >
                        <Login/>
                    </Route>
                    <Route path='/'>
                        < Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;