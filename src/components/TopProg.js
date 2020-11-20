import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./TopProg.css";
import { Typography } from "@material-ui/core";

function TopProg() {
  return (
    <div className="topProgs">
      <h1>Top Competitive Programmers around the globe!</h1>
      <div className="topProgs_cards">
        <Card>
          <CardContent>
            <Typography color="textSecondary">image</Typography>
            <Typography color="textPrimary">name</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography color="textSecondary">image</Typography>
            <Typography color="textPrimary">name</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography color="textSecondary">image</Typography>
            <Typography color="textPrimary">name</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography color="textSecondary">image</Typography>
            <Typography color="textPrimary">name</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TopProg;
