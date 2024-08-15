import axios from "axios";

const api = axios.create({
  baseURL: "https://api.estagio.amfernandes.com.br",
});

export default api;