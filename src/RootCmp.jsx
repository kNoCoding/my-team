import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

function RootCmp() {


  return (
    <>
      <AppHeader />
      <main>
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
        </Routes>

      </main>
      <AppFooter />
    </>
  )
}

export default RootCmp
