import axios from "axios";

const externalAPI = axios.create({
  baseURL: "http://192.168.0.112:8080",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default externalAPI;
