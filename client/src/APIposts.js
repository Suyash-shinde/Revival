import axios from "axios"

import { loginRoute, logoutRoute, registerRoute, refreshTokenRoute} from "./APIroutes"

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
export const logout = ()=>api.post(logoutRoute);


api.interceptors.response.use(
    (config)=>{
        return config;
    },
    async(error)=>{
        const originalRequest = error.config;
        if(
            error.response.status === 405 &&
            originalRequest &&
            !originalRequest._isRetry
        ){
            originalRequest._isRetry=true;
            try {
                await axios.post(
                    refreshTokenRoute,{},
                    {
                        withCredentials: true,
                    }
                );

                return api.request(originalRequest);
            } catch (error) {
                console.log(error.msg);
            }
        }
        throw error;
    }
)


export default api;