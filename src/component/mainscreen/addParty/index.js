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
import {useDispatch} from 'react-redux'
import { addparty } from "../../../redux/action/addparty";
import Header from '../../header'

export default function AddUser() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const[fname, fnameSet]=useState('');
const fnameHandler = (e)=>{
  fnameSet(e.target.value)
}

const[address, addressSet]=useState('');
const addressHandler = (e)=>{
  addressSet(e.target.value)
}
const[phone, phoneSet]=useState('');
const phoneHandler = (e) =>{
  phoneSet(e.target.value)
}

const submit = () =>{
 let data = {
fname:fname,
address:address,
phone:phone
}
console.log("in abc", data);
dispatch(addparty(data))
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
      <h1 style={{ textAlign: "center" }}>ADD PARTIES</h1>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid container>
              <Grid item xs={6} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Party Name
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12} xs={6}>
                <TextField
                  autoComplete="fname"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Party Name"
                  autoFocus
                  value={fname}
                  onChange={fnameHandler}
                />
              </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="address"
              label=" Address"
              name="address"
              autoComplete="address"
              value={address}
              onChange={addressHandler}
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

            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ marginTop: "10px" }}
                >
                  Select Bank
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    ref={inputLabel}
                    htmlFor="outlined-age-native-simple"
                  >
                    Bank
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
                    <option value={10}>HBL</option>
                    <option value={20}>UBL</option>
                    <option value={30}>PUNJANB BANK</option>
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