import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const history = useNavigate();

  const response = () =>
    axiosInstance.post("api/user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  axiosInstance.defaults.headers["Authorization"] = null;
  history("/login");

  return <div onClick={response}>Logout</div>;
}
