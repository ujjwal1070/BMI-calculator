import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

function BMICard() {
  return (
    <div>
      {/* <Paper elevation={3} style={{ height: "400px", width: "300px" }}> */}
      <div className={`card`}>
        <div className="card-inner">
          <Card raised="true" style={{ height: "400px", width: "300px" }}>
            <div className="card-front">
              <CardHeader title="BMI" />
              <CardContent>
                <Typography align="left" paragraph>
                  Body mass index (BMI) is a person’s weight in kilograms
                  divided by the square of height in meters. It is an
                  inexpensive and easy-to-perform method of screening for weight
                  categories that may lead to health problems.
                </Typography>
                <Typography align="left" paragraph>
                  A high BMI can indicate high body fatness. BMI does not
                  measure body fat directly, but BMI is correlated with more
                  direct measures of body fat.
                </Typography>
              </CardContent>
            </div>
            <div className="card-back">
              <CardHeader title="BMI PERCENTILE" />
              <CardContent>
                <Typography align="left" paragraph>
                  For children and teens,however, BMI is age and sex specific
                  and is expressed as a percentile obtained from either a graph
                  or a percentile calculator and is not a diagnostic tool.
                  Instead it is used to screen for potential weight and
                  health-related issues.
                </Typography>
                <Typography align="left" paragraph>
                  The{" "}
                  <a
                    href="https://www.cdc.gov/healthyweight/assessing/bmi/childrens_bmi/about_childrens_bmi.html"
                    target="_blank"
                  >
                    BMI percentile growth charts
                  </a>{" "}
                  are the most commonly used indicator to measure the size and
                  growth patterns of children and teens.
                </Typography>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>

      {/* </Paper> */}
    </div>
  );
}

export default BMICard;
