import axios from "axios";
import useGetEnviroment from "./useGetEnviroment";
const useRefreshToken = () => {
    const {url}=useGetEnviroment();
    const originalAxiosRequest = axios.request;

    axios.interceptors.response.use(
        response => response,
        async error => {
            const originalRequest = error.config;

            // Check for 401 and avoid loops
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    // 1. Attempt to refresh token
                    await originalAxiosRequest({
                        method: 'get',
                        url: `${url}/api/refreshToken`,
                        withCredentials: true
                    });
                    // 2. Retry the original request
                    return originalAxiosRequest(originalRequest);
                } catch (refreshError) {
                    // window.location.href = '/login';
                    toast('you are not logged in ')
                    return Promise.reject(refreshError);
                }
            }

            return Promise.reject(error);
        }
    );
}
export default useRefreshToken