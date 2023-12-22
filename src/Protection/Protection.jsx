import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import { Circles } from  'react-loader-spinner'
import { AuthContext } from "../Context/AuthenticationProvider";


const Protection = ({ children }) => {
    const { User, isLoading } = useContext(AuthContext);

    const location = useLocation();

    if (isLoading) {
        return (<div className="flex justify-center text-purple-600 items-center min-h-screen">
            <Circles
                height="80"
                width="80"
                color="#0FCFEC"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>)
    }
    if (!User) {
        toast.warn('You need to login to access the route', {
            position: "top-center"
        })
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    if (User) {
        return children;
    }
};

export default Protection;