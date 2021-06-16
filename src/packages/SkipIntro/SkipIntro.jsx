import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    CssBaseline,
} from '@material-ui/core/'

const useStyles = makeStyles( theme => ({
    wrapper:{
        border: '1px solid ' + theme.palette.primary.main,
    },
}))

export default function SkipIntro( props ) {

    const classes = useStyles()

    return <div className={ clsx( classes.wrapper) }>
                <CssBaseline />
               SkipIntro
           </div>

}