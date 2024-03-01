import axios from "axios";
import { BASE_URL } from "../constants";

export const ApiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
//   headers: { "X-Custom-Header": "foobar" },
});
