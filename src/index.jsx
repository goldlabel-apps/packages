import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import {
    createMuiTheme,
    MuiThemeProvider,
    CssBaseline,
} from '@material-ui/core/'
import { theme } from './theme'
import { SkipIntro } from './packages'
import { 
  SearchAppBar,
} from './components'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

ReactDOM.render(<React.StrictMode>
                  <MuiThemeProvider theme={ createMuiTheme( theme ) }>
                    <CssBaseline />
                      <SearchAppBar />
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
                    </MuiThemeProvider> 
                </React.StrictMode>, document.getElementById('packages'))
