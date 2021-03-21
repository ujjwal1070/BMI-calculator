import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
  },
}));

function BMICalculator() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    weight: "",
    feet: 5,
    inch: 9,
  });

  // const [age, setAge] = useState()
  // const [weight, setWeight] = useState()
  // const [feet, setFeet] = useState()
  // const [inch, set] = useState()

  const [BMIindex, setBMIindex] = React.useState("BMI");
  const [condition, setCondition] = React.useState("STATUS");

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const calculate = () => {
    console.log(state);
    let inches = state.feet * 12 + state.inch;
    let meters = inches * 0.0254;
    let bmi = (state.weight / meters ** 2).toFixed(2);
    let condition;

    if (bmi < 18.5) {
      condition = "Under Weight";
    } else if (bmi > 25) {
      condition = "Over weight";
    } else {
      condition = "Normal Weight";
    }

    console.log(state);
    console.log(bmi);
    setBMIindex(bmi);
    console.log(BMIindex);
    setCondition(condition);
    console.log(`BMI is ${BMIindex} ${condition}`);
  };

  return (
    <div>
      <Paper elevation={24} style={{ height: "400px", width: "300px" }}>
        <Grid container direction="column" justify="space-around" spacing={3}>
          <Grid item>
            <Typography className={classes.paper} variant="h4">
              CALCULATOR
            </Typography>

            {/* <TextField
              label="Age"
              variant="outlined"
              type="number"
              placeholder="Years"
              name="age"
              value={state.age}
              onChange={handleChange}
              className={classes.paper}
            /> */}
          </Grid>

          <Grid item>
            <TextField
              label="Weight"
              variant="outlined"
              type="number"
              placeholder="In Kilograms"
              name="weight"
              value={state.weight}
              onChange={handleChange}
              // className={classes.paper}
            />
          </Grid>

          <Grid item container direction="row" justify="space-evenly">
            <Grid item>
              <FormControl variant="outlined">
                <InputLabel>Feet</InputLabel>
                <Select
                  name="feet"
                  value={state.feet}
                  onChange={handleChange}
                  style={{ width: "90px" }}
                  label="Feet"
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                  <MenuItem value={6}>Six</MenuItem>
                </Select>
                {/* <FormHelperText>Height</FormHelperText> */}
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl variant="outlined">
                <InputLabel>Inches</InputLabel>
                <Select
                  name="inch"
                  value={state.inch}
                  onChange={handleChange}
                  style={{ width: "100px" }}
                  label="Inches"
                >
                  <MenuItem value={0}>Zero</MenuItem>
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                  <MenuItem value={6}>Six</MenuItem>
                  <MenuItem value={7}>Seven</MenuItem>
                  <MenuItem value={8}>Eight</MenuItem>
                  <MenuItem value={9}>Nine</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={11}>Eleven</MenuItem>
                </Select>
                {/* <FormHelperText>Height</FormHelperText> */}
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton onClick={calculate}>
            <DoneIcon fontSize="large" variant="contained" />
          </IconButton>
        </Grid>
        <Typography variant="h4">{BMIindex}</Typography>
      </Paper>
    </div>
  );
}

export default BMICalculator;
