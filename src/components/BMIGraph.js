import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import BMI from "../images/BMIGraph.png";
import panda from "../images/panda.jpg";

function BMIGraph() {
  return (
    <div>
      <Paper elevation={3} style={{ height: "400px", width: "300px" }}>
        <Card raised="true" style={{ height: "100%" }}>
          <CardMedia
            style={{
              paddingTop: "133%",
            }}
            image={BMI}
            title="BMI Graph"
          />
        </Card>
        {/* <div
          style={{
            backgroundImage: `url(${BMI})`,
            opacity: "95%",
            height: "400px",
            width: "300px",
          }}
        >
          hello
        </div> */}
      </Paper>
    </div>
  );
}

export default BMIGraph;
