import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './style'
// import Dashboard from '../../appNavigation'
import {login} from '../../../redux/action/auth';
import {useDispatch} from 'react-redux'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Farwa Siddique
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}

    </Typography>
  );
}

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [email, emailSet] = useState('');
  const emailHandler = (e) => {
    emailSet(e.target.value)
  }
  const [password, setPassword] = useState('');
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }


  const submit = ()=>{
    let data = {
      email: email,
      password: password
    }
    console.log("in component", data);
    dispatch(login(data))
    
  }



  console.log(password)
  console.log(email)
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={7} className={classes.Title}>
          <Typography variant="h2" className={classes.headingTitle}>Tracking Station</Typography>
          <Typography className={classes.discription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in enim arcu. Integer lobortis tellus ipsum, a rutrum ex vulputate id. In quis ante nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eget maximus nibh, eu facilisis eros. Suspendisse potenti. Duis lobortis ac felis eu congue. Aliquam vitae sem non dolor ullamcorper bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed lorem semper, rutrum metus ut, dignissim urna. Cras elementum quam et diam cursus, in euismod erat ultricies. Ut fringilla massa nec magna gravida varius.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.loginForm}>
          <Container component="main" maxWidth="xs" className={classes.loginContainer}>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
        </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  // onChange = {(e)=>emailHandler(e.target.value)}
                  onChange={emailHandler}
                />
                <TextField
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={passwordHandler}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" className={classes.chkbox} />}
                  label="Remember me"
                />
                <Link to="/dashboard">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={submit}
                  >
                    Sign In
          </Button>
                </Link>

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
              </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {/* {"Don't have an account? Sign Up"} */}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
