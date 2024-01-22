import { Home } from '../src/pages/Home.jsx'
import { About } from '../src/pages/About.jsx'

const routes = [
    {
        path: '/',
        component: <Home />,
        label: 'home',
    },
    {
        path: 'about',
        component: <About />,
        label: 'about',
    }
]

export default routes