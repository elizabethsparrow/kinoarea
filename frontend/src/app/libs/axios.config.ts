import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.MODE === "production" &&
    window.location.host.search(/localhost/i) < 0
      ? "/api/"
      : import.meta.env.VITE_APP_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.tokenEP,
  },
});

export default instance