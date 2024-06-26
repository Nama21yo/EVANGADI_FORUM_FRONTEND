import axios from "axios";
const axiosBase = axios.create({
  baseURL: "https://evangadi-forum-backend-838u.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
