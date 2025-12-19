import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

export async function login(email: string, password: string) {
  const { data } = await api.post("/admin/login", { email, password });
  return data; // deve retornar { token: string }
}
