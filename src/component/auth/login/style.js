import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    avatar: {
      margin: theme.spacing(1),
      // backgroundColor: theme.palette.secondary.main,
      backgroundColor:'#7734CB',
      height:'100px',
      width:'100px'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:'#7734CB',
      textDecoration:'none',
    },
    Title:{
        backgroundColor:'#7734CB',
        borderBlock:'2px',
        borderColor:'black'
    },
    loginForm:{
        backgroundColor:'#f4f2f2',
        height:800,   
    },
    headingTitle:{
      color:'white',
      alignItems:'center',
      marginTop:"25%",
      paddingLeft:'20px',
      paddingRight:'20px'
    },
    discription:{
      color:'white',
      paddingLeft:'50px',
      paddingRight:'50px',
      paddingTop:'10px'
    },
    loginContainer:{
      marginTop:'100px'
    },
    cssLabel: {
      color : 'green'
    },
  
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: `#7734CB !important`,
        
      }
    },
  
    cssFocused: {
    
    },
    notchedOutline: {
      borderWidth: '1px',
      borderColor: '#7734CB !important'
    },
    chkbox:{
      color:'#7734CB !important'
    }

  }));