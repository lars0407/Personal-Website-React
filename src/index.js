import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Frame7244471 from './views/frame7244471'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Frame7244471} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
