import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const instance = axios.create({
        baseURL : 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const location = useLocation();
    
    const { logout } = useContext(AuthContext);

    instance.interceptors.request.use(
        function(config){
                const token = localStorage.getItem('access-token');
                config.headers.authorization = `Bearer ${token}`;
                return config
        },
        function(error){
                return Promise.reject(error);
        }
    )

    instance.interceptors.response.use(
            function(response){
                return response
            },

            async (error) => {
                    // console.log("error" , error)
                    
                    const sta = error?.response?.status;
                    // console.log("status" , sta);
                    if(sta === 401 || sta === 403){
                        await logout()
                        .then(() => {
                            // toast.success("Logout Successful");
                            return <Navigate to="/login" state={{from : location}}></Navigate>
                          })
                          .catch((error) => {
                            // toast.error(error.message);
                          });
                            
                    }
                    return Promise.reject(error);
            }
    )
    return instance
};

export default useAxiosSecure;