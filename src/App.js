import React, { useState } from 'react';
import PrivateRoutes from './components/private-routes.js/PrivateRoutes';
import localStorageService from './service/localStorageService';

function App() {
    const [role, setRole] = useState(localStorageService.getRole())
    return (
        <PrivateRoutes role={role} setRole={setRole} />
    );
}

export default App;