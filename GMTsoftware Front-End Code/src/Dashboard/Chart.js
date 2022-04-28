
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="desc">Task/Project Completed Score</p>
      </div>
    );
  }

  return null;
};

function Chart() {
  const task = localStorage.getItem("usertasks");
  let chartTask = JSON.parse(task);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={500}
        data={chartTask}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="submit_date" />
        <YAxis dataKey="Scores" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Scores" barSize={10} fill="#ff0000" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
