import axios from "axios";

const BASE_URL = "http://localhost:9292/";

export const publicRequest = axios.create({ baseURL: BASE_URL });
