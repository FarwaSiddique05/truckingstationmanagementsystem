import React from 'react'
import Header from '../../header'
import Paper from '@material-ui/core/Paper';
import {useStyles} from './style'
import {Link} from 'react-router-dom'

export default function Dashboard () {
    const classes=useStyles()
     return (
        <div>
            <Header />
            <div style={{ textAlign: "center", marginTop: -30 }}>
                <h1>Wellcome To Dashboard</h1>
                <Link to='adduser' >
                <Paper className={classes.paper} />
                </Link>
            </div>
        </div>
    )
}

