import React from 'react'
import Header from '../../header'
import Paper from '@material-ui/core/Paper';
import {useStyles} from './style'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
export default function Dashboard () {
    const classes=useStyles()
     return (
        <div>
            <Header />
            <h1 style={{ textAlign: "center", marginTop: -30 }} >Wellcome To Dashboard</h1>
            <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
        </Grid>
        <Grid item xs={12} sm={2}  >
            <Grid item sm ={12}  >  
             <Link to='adduser' style={{color:'white', textDecoration:'none'}}>
            <div  style={{ textAlign: "center", backgroundColor: '#cc2b5e' , height: 100  ,fontFamily: 'monstarete', fontSize:'30px'}}>

          ADD USER
            </div>
            </Link>
     <Link to='viewuser' style={{color:'white', textDecoration:'none'}} >
            <div  style={{ textAlign: "center", backgroundColor: '	 #753a88' , height: 100 ,fontFamily: 'monstarete' , fontSize:'30px'}}>

        VIEW USER
            </div>
        </Link>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={2}>
        <Grid item sm ={12} >  
             <Link to='addparty' className={classes.link}>
            <div  style={{ textAlign: "center", backgroundColor: '#ff8080' , height: 100  ,fontFamily: 'monstarete', fontSize:'30px'}}>

          ADD PARTY
            </div>
            </Link>
     <Link to='viewparty' className={classes.link} >
            <div  style={{ textAlign: "center", backgroundColor: '#ff4d4d' , height: 100 ,fontFamily: 'monstarete' , fontSize:'30px'}}>

        VIEW PARTY
            </div>
        </Link>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={2}>
        <Grid item sm ={12} >  

             <Link to='adduser' className={classes.link}>
            <div  style={{ textAlign: "center", backgroundColor: 'orange' , height: 100  ,fontFamily: 'monstarete', fontSize:'30px'}}>
          ADD USER
            </div>
            </Link>
     <Link to='adduser' className={classes.link} >
            <div  style={{ textAlign: "center", backgroundColor: '#ff8000' , height: 100 ,fontFamily: 'monstarete' , fontSize:'30px'}}>

        VIEW USER
            </div>
        </Link>
        </Grid>        </Grid>
        <Grid item xs={12} sm={2}>
        <Grid item sm ={12} >  
             <Link to='adduser' className={classes.link}>
            <div  style={{ textAlign: "center", backgroundColor: '#ff4000' , height: 100  ,fontFamily: 'monstarete', fontSize:'30px'}}>

          ADD USER
            </div>
            </Link>
     <Link to='adduser' className={classes.link} >
            <div  style={{ textAlign: "center", backgroundColor: '#ff0000' , height: 100 ,fontFamily: 'monstarete' , fontSize:'30px'}}>

        VIEW USER
            </div>
        </Link>
        </Grid>
        </Grid>
      </Grid>
    </div>
        </div>
    )
}

