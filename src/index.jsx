import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

ReactDOM.render(
  <React.StrictMode>
    <div>div</div>
  </React.StrictMode>,
  document.getElementById('skip-intro')
)

reportWebVitals()
