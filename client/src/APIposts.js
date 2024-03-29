import axios from "axios"

import { loginRoute, registerRoute } from "./APIroutes"

const api = axios.create({
    baseURL: "http://localhost:5173",
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

export const register =(data)=>api.post(registerRoute,data);
export const login = (data)=>api.post(loginRoute,data);




export default api;