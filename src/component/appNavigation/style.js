import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    width: 300,
    textAlign: 'center' ,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    marginTop: "30px",
    margin: theme.spacing(1),
    minWidth: 150,
    // backgroundColor: 'orange',
    
  },
 button:{
  backgroundColor: 'DodgerBlue', 
  fontFamily: "monsterate",
   marginTop: "50px", 
   color:"white",
    fontSize:"30px" ,
 },
}));