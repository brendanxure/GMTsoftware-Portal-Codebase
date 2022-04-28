import * as React from "react";
import { useState } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [value, setValue] = useState(5);
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
    </React.Fragment>
  );
}
