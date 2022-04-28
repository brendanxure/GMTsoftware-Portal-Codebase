import {
  FaBook,
  FaChartPie,
  FaLightbulb,
  FaTicketAlt,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
export const menuData = [
  {
    title: "Overview",
    icon: <FaChartPie style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Tickets",
    icon: <FaTicketAlt style={{ marginRight: "0.5rem" }} />,
    active: true,
  },
  {
    title: "Ideas",
    icon: <FaLightbulb style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Contacts",
    icon: <FaUsers style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Agents",
    icon: <FaUserTie style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Articles",
    icon: <FaBook style={{ marginRight: "0.5rem" }} />,
  },
];
