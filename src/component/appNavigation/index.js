import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './style'
import Header from '../header'
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Dashboard() {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <div>
      <Header />
      </div>
       <Grid container spacing={3}>
         <Grid item sm={2} xs={12}>

         </Grid>
        <Grid item sm={3} xs={12}>
        <Paper className={classes.paper}  >
        <Button onClick={handleClickOpen}  className={classes.button}>ADD USERS</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>SELECT USERS</DialogTitle>
        <DialogContent>
          <form className={classes.container} >
            <FormControl className={classes.formControl} >
              <InputLabel id="demo-dialog-select-label" >USERS</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>ADD USERS</MenuItem>
                <MenuItem value={20}>VIEW USERS</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
        </Paper>
        </Grid>
        <Grid item sm={3} xs={12}>
        <Paper className={classes.paper} style={{backgroundColor:"blue"}}>
          <Button>
          <FormControl className={classes.formControl} >
              <InputLabel id="demo-dialog-select-label" style={{color: "white", fontFamily:"monsterate" , fontSize:"30px"}}>Parties</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<Input />}
                // style={{backgroundColor:"DodgerBlue"}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>ADD USERS</MenuItem>
                <MenuItem value={20}>VIEW USERS</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Button>
        </Paper>
        </Grid>
        <Grid item sm={3} xs={12}>
        <Paper className={classes.paper} style={{backgroundColor:"pink"}} >
        <Button onClick={handleClickOpen}  className={classes.button} style={{backgroundColor:"pink"}}>Employee</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>SELECT USERS</DialogTitle>
        <DialogContent>
          <form className={classes.container} >
            <FormControl className={classes.formControl} >
              <InputLabel id="demo-dialog-select-label" >USERS</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>ADD USERS</MenuItem>
                <MenuItem value={20}>VIEW USERS</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
        </Paper>
        </Grid>
       </Grid>

<Grid container spacing={3}>
<Grid item sm={2} xs={12}>
</Grid>
<Grid item sm={3} xs={12}>
<Paper className={classes.paper} style={{backgroundColor:"#de493c"}} >
<Button onClick={handleClickOpen}  className={classes.button} style={{backgroundColor:"#de493c"}} >ADD USERS</Button>
<Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
<DialogTitle>SELECT USERS</DialogTitle>
<DialogContent>
 <form className={classes.container} >
   <FormControl className={classes.formControl} >
     <InputLabel id="demo-dialog-select-label" >USERS</InputLabel>
     <Select
       labelId="demo-dialog-select-label"
       id="demo-dialog-select"
       value={age}
       onChange={handleChange}
       input={<Input />}
     >
       <MenuItem value="">
         <em>None</em>
       </MenuItem>
       <MenuItem value={10}>ADD USERS</MenuItem>
       <MenuItem value={20}>VIEW USERS</MenuItem>
       <MenuItem value={30}>Thirty</MenuItem>
     </Select>
   </FormControl>
 </form>
</DialogContent>
<DialogActions>
 <Button onClick={handleClose} color="primary">
   Cancel
 </Button>
 <Button onClick={handleClose} color="primary">
   Ok
 </Button>
</DialogActions>
</Dialog>
</Paper>
</Grid>
<Grid item sm={3} xs={12}>
<Paper className={classes.paper} style={{backgroundColor:"yellow"}}>
 <Button>
 <FormControl className={classes.formControl} >
     <InputLabel id="demo-dialog-select-label" style={{color: "white", fontFamily:"monsterate" , fontSize:"30px"}}>Parties</InputLabel>
     <Select
       labelId="demo-dialog-select-label"
       id="demo-dialog-select"
       value={age}
       onChange={handleChange}
       input={<Input />}
       // style={{backgroundColor:"DodgerBlue"}}
     >
       <MenuItem value="">
         <em>None</em>
       </MenuItem>
       <MenuItem value={10}>ADD USERS</MenuItem>
       <MenuItem value={20}>VIEW USERS</MenuItem>
       <MenuItem value={30}>Thirty</MenuItem>
     </Select>
   </FormControl>
 </Button>
</Paper>
</Grid>
<Grid item sm={3} xs={12}>
<Paper className={classes.paper} style={{backgroundColor:"orange"}} >
<Button onClick={handleClickOpen}  className={classes.button} style={{backgroundColor:"orange"}}>Employee</Button>
<Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
<DialogTitle>SELECT USERS</DialogTitle>
<DialogContent>
 <form className={classes.container} >
   <FormControl className={classes.formControl} >
     <InputLabel id="demo-dialog-select-label" >USERS</InputLabel>
     <Select
       labelId="demo-dialog-select-label"
       id="demo-dialog-select"
       value={age}
       onChange={handleChange}
       input={<Input />}
     >
       <MenuItem value="">
         <em>None</em>
       </MenuItem>
       <MenuItem value={10}>ADD USERS</MenuItem>
       <MenuItem value={20}>VIEW USERS</MenuItem>
       <MenuItem value={30}>Thirty</MenuItem>
     </Select>
   </FormControl>
 </form>
</DialogContent>
<DialogActions>
 <Button onClick={handleClose} color="primary">
   Cancel
 </Button>
 <Button onClick={handleClose} color="primary">
   Ok
 </Button>
</DialogActions>
</Dialog>
</Paper>
</Grid>
</Grid>

</div>

     
    
  );
}
