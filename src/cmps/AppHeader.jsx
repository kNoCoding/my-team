import { NavLink } from 'react-router-dom'
import routes from '../routes'



export function AppHeader() {


    return (
        <>
            <h2 className="logo">myteam</h2>

            <ul>
                {routes.map(route => <li key={route.path}> <NavLink to={route.path}>{route.label}</NavLink></li>)}
            </ul>
        </>
    )
}