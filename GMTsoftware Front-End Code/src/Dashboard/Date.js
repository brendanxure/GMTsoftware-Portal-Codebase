import Typography from "@mui/material/Typography";
import Title from "./Title";

export default function Deposits() {
  const task = localStorage.getItem("usertasks");
  let recenttask = JSON.parse(task);

  let recentTask_nos = recenttask.reduce(
    (acc, item) => (acc = acc > item.Task_nos ? acc : item.Task_nos),
    0
  );

  let recentDate = recenttask.reduce(
    (acc, item) => (acc = acc > item.submit_date ? acc : item.submit_date),
    0
  );

  let EachTask2 = recentTask_nos ? recentTask_nos : 0;
  let EachTask3 = recentDate ? recentDate : "No Task Yet";
  return (
    <>
      <Title>Recent Project Task</Title>
      <Typography component="p" variant="h6">
        Number Of Task:{EachTask2}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {EachTask3}
      </Typography>
    </>
  );
}
