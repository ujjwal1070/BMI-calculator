import logo from "./logo.svg";
import "./App.css";
import Grid from "@material-ui/core/Grid";

import BMICalculator from "./components/bmiCalculator";
import BIMCard from "./components/BMICard";
import BMIGraph from "./components/BMIGraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <BIMCard />
          </Grid>
          <Grid item>
            <BMICalculator />
          </Grid>
          <Grid item>
            <BMIGraph />
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
