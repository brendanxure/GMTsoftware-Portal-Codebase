import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Attendance",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Project Executed",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Task Completed",
    A: 99,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Team Work",
    A: 85,
    B: 120,
    fullMark: 150,
  },
];

export default class Performance extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Range"
            dataKey="A"
            stroke="#ff0000"
            fill="#ff0000"
            fillOpacity={1}
          />
          <Radar
            name="Metric"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
