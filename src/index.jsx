import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import RootCmp from './RootCmp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router>
    <RootCmp />
  </Router>
  // </React.StrictMode>,
)
