import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'

const useStyles = makeStyles( theme => ({
    titlebar:{
        height: 50,
        // border: '1px solid ' + theme.palette.secondary.main,
    },
}))

export function Titlebar(  ) {

    const classes = useStyles()

    return <div className={ clsx( classes.titlebar ) }>
                Titlebar
           </div>
}
