import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 200,
      width: 200,
      backgroundColor:'red',
      marginLeft:100
    },
    // control: {
    //   padding: theme.spacing(2),
    // },
  }));