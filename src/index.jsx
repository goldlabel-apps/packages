import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import { SkipIntro } from './packages'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

ReactDOM.render(<React.StrictMode>
                  <SkipIntro 
                    options={{
                      title: `Skip Intro ?`,
                      btnTxt: `Hell yeh.`,
                      centerize: true,
                      width: 400,
                      height: 400,
                      borderColor: `#fff`,
                      onClick: (e) => {
                        e.preventDefault()
                        console.log (' CLICKED!! ')
                      },
                    }}
                  />
                </React.StrictMode>, document.getElementById('skip-intro'))
