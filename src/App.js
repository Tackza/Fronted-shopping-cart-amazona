import React, { useState } from 'react';
import PrivateRoutes from './components/private-routes.js/PrivateRoutes';
import localStorageService from './service/localStorageService';
import {SearchContextProvider} from './contexts/SearchContext'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [role, setRole] = useState(localStorageService.getRole())
    return (
        <SearchContextProvider>
            <PrivateRoutes role={role} setRole={setRole} />
        </SearchContextProvider>        
    );
}

export default App;