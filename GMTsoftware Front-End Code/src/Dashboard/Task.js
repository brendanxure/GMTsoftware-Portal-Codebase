import * as React from "react";

import { DataGrid } from "@mui/x-data-grid";

import ResponsiveDialog from "../Reviews/Reviews";
import Status from "../component/Button";

import Download from "../component/Download";

export default function Task() {
  const task = localStorage.getItem("usertasks");
  let EachTask = JSON.parse(task);

  const columns = [
    { field: "Task", headerName: "Task", width: 300 },
    { field: "start_date", headerName: "Date-posted", width: 100 },
    {
      field: "status",
      headerName: "status",
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => <Status value={params.value} />,
    },
    { field: "Task_nos", headerName: "Task_nos", width: 100 },
    { field: "submit_date", headerName: "submit_date", width: 100 },
    {
      field: "Reviews",
      headerName: "Reviews",
      width: 300,
      disableClickEventBubbling: true,
      renderCell: (params) => <ResponsiveDialog review={params.value} />,
    },
    {
      field: "File",
      headerName: "Download",
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params) => <Download download={params.value} />,
    },
  ];

  const [sortModel, setSortModel] = React.useState([
    {
      field: "Task",
      sort: "asc",
    },
  ]);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        getRowId={() => Math.random()}
        rows={EachTask}
        columns={columns}
        pageSize={12}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
}
