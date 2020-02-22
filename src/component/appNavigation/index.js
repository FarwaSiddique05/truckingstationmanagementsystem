import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import {useStyles} from './style'
import Header from '../header'
import SideBar from '../sidebar'
export default function Dashboard() {
//   const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <Grid container spacing={0}>
       
    //     <Grid item xs={12} sm={3}>
         
    //       <SideBar />
    //     </Grid>
    //     <Grid item xs={12} sm={9}>
    //     <Header />
    //     </Grid>
    
        
    //   </Grid>
    // </div>
    <div>
        <Header />
    </div>
  );
}
