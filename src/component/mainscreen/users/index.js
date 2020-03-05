import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useStyles} from './style'
import {useDispatch } from 'react-redux'
import { adduser } from "../../../redux/action/adduser";
import Header from '../../header'
export default function AddUser() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const[fname, fnameSet]=useState('');
const fnameHandler = (e)=>{
  fnameSet(e.target.value)
}
const[lname, lnameSet]=useState('');
const lnameHandler = (e)=>{
  lnameSet(e.target.value)
}
const[email, emailSet]=useState('');
const emailHandler = (e)=>{
  emailSet(e.target.value)
}
const[phone, phoneSet]=useState('');
const phoneHandler = (e) =>{
  phoneSet(e.target.value)
}
const[cnic, cnicSet]=useState('');
const cnicHandler = (e) =>{
  cnicSet(e.target.value)
}
const[password, passwordSet]=useState('');
const passwordHandler = (e) =>{
  passwordSet(e.target.value)
}
const submit = ()=>{
  let data ={
    fname: fname ,
    lname: lname ,
    email: email ,
    phone : phone ,
    cnic: cnic,
    password : password 
  }
  console.log("in component" , data)
  dispatch(adduser(data))
}

  const [state, setState] = React.useState({
    user: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <Container component="main" maxWidth="xs">
    <Header />
      <CssBaseline />
      <h1 style={{ textAlign: "center" }}>ADD USER</h1>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid container>
              <Grid item xs={6} sm={6}>
                <Typography variant="h6" gutterBottom>
                  First Name
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Last Name
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={fname}
                  onChange={fnameHandler}
                />
              </Grid>
              <Grid item sm={6} xs={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={lname}
                  onChange={lnameHandler}
                />
              </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
              Email Address
            </Typography>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={emailHandler}
            />
            <Typography variant="h6" gutterBottom>
              Phone Number
            </Typography>

            <TextField
              variant="outlined"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone "
              autoComplete="phone"
              value={phone}
              onChange={phoneHandler}
            />
            <Typography variant="h6" gutterBottom>
              CNIC
            </Typography>

            <TextField
              variant="outlined"
              required
              fullWidth
              id="cnic"
              label="CNIC"
              name="cnic"
              autoComplete="cnic"
              value={cnic}
              onChange={cnicHandler}
            />
            <Typography variant="h6" gutterBottom>
              Password
            </Typography>

            <TextField
              variant="outlined"
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

            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ marginTop: "10px" }}
                >
                  Select User
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    ref={inputLabel}
                    htmlFor="outlined-age-native-simple"
                  >
                    user
                  </InputLabel>
                  <Select
                    native
                    value={state.user}
                    onChange={handleChange("user")}
                    labelWidth={labelWidth}
                    inputProps={{
                      name: "Users",
                      id: "outlined-age-native-simple"
                    }}
                  >
                    <option value="" />
                    <option value={10}>Admin</option>
                    <option value={20}>User1</option>
                    <option value={30}>User2</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submit}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}