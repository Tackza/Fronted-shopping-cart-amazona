import React, { useState } from 'react';
import Header from './components/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import History from './components/History';
import PrivateRoutes from './components/private-routes.js/PrivateRoutes';
import localStorageService from './service/localStorageService';

function App() {
    const [role, setRole] = useState(localStorageService.getRole())
    return (
        <PrivateRoutes role={role} setRole={setRole} >

            <BrowserRouter >
                <Switch>
                    <Route path="/cart" >
                        <Cart />
                    </Route>
                    <Route path="/register" >
                        <Register />
                    </Route>
                    < Route path='/login' >
                        <Login />
                    </Route>
                    < Route path='/history' >
                        <History />
                    </Route>
                    <Route path='/'>
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </PrivateRoutes>

    );
}

export default App;