import axios from "axios";
const token = JSON.parse(localStorage.getItem("user")) || "dummytest";

export const axiosInstance = axios.create({
  baseURL: "https://server-s0ys.onrender.com",
  headers: {
    Authorization: `Bearer ${token.jwtToken}`,
  },
});
