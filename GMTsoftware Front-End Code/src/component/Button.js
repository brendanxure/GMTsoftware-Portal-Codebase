import { Button } from "@mui/material";
import React, { useEffect } from "react";

function Status({ value }) {
  // console.log(value);
  const [color, setColor] = React.useState("primary");
  useEffect(() => {
    if (value === "Pending") {
      setColor("primary");
    } else if (value === "Approve") {
      setColor("success");
    } else {
      setColor("error");
    }
  }, [value]);

  return (
    <>
      <Button variant="contained" color={color}>
        {value}
      </Button>
    </>
  );
}

export default Status;
