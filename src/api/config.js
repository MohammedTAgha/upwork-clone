import axios from "axios";

export const myAxios = axios.create({
  baseURL: "https://react-tt-api.onrender.com/api/",
});
export const addTokenToTheAxios = (token) => {
  myAxios.defaults.headers["Authorization"] = `Bearer ${token}`;
};

export const AUTH_API = process.env.REACT_APP_AUTH_API;
if (process.env.NODE_ENV === "production") {
  console.log("production");
}
