import axios from "axios";

const API = axios.create({
  baseURL:
    "https://urban-space-trout-pgrr5g5qqw5hrq6w-5000.app.github.dev",
});

export const checkBackend = () => {
  return API.get("/api/health");
};

export const getNews = () => {
  return API.get("/api/news");
};



