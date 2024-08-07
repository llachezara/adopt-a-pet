import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function AuthGuard(){
    const currentUser = useContext(AuthContext);

    if (currentUser.isPresent) {
        return <Navigate to={"/not-found"}/>;
    }

    return (
        <Outlet/>
    )
}