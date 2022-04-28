import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Task2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const task = localStorage.getItem("usertasks");
  let Apptask = JSON.parse(task);
 

  let EachTask2 = Apptask ? Apptask : 0;
  return (
    <>
      {EachTask2 !== 0
        ? EachTask2.map((task) => (
            <>
              <Accordion
                expanded={expanded === `panel${task.pk}`}
                onChange={handleChange(`panel${task.pk}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    {task.Scores}%
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {task.Task_completed === true
                      ? "Task Completed"
                      : "Pending Solution"}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{task.Task}</Typography>
                </AccordionDetails>
              </Accordion>
            </>
          ))
        : "No Task Assigned Yet Check Back Later"}
    </>
  );
}
