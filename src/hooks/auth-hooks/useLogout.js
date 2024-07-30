import { logoutUser } from "../../api/auth-api/auth";

export function useLogout(){

    const logout = async () => {
        const logoutError = await logoutUser();
        console.log("LOGOUT ERROR", logoutError);
    }

    return {
        logout
    }
}