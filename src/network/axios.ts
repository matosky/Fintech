import axios from "axios";
import { Config } from "../config/Config";

export const instance = axios.create({
  baseURL: Config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
}) 