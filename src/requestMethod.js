import axios from "axios";

const BASE_URL = "https://event-guide-backend.herokuapp.com/";

export const publicRequest = axios.create({ baseURL: BASE_URL });
