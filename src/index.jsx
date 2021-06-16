import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import { SkipIntro } from './packages'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

ReactDOM.render(
  <React.StrictMode>
    <SkipIntro 
      options={{
        jgj: 123,
      }}
    />
  </React.StrictMode>,
  document.getElementById('skip-intro')
)
