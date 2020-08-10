import React from 'react'
import configRoutes from '../../config/routes'
import { Switch, Route, Redirect } from 'react-router-dom'


function PrivateRoutes(props) {
    const role = props.role || 'guest'
    const allowedRoutes = configRoutes[role].allowedRoutes
    const redirectRoutes = configRoutes[role].redirectRoutes
    return (
        <Switch>
            {allowedRoutes.map(route => (
                <Route
                    path={route.url}
                    key={route.url}
                    exact
                >
                    <route.component setRole={props.setRole} />
                </Route>
            ))}
            <Redirect to={redirectRoutes} />
        </Switch>
    )
}

export default PrivateRoutes
