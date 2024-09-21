import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID jjBZr4NpDJW8FQKA7PevIDgBhLSqHx3sfF9Y3ywoaG8",
  },
});

export default api;
