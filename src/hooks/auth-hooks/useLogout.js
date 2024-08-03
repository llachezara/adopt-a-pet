import { logoutUser } from "../../api/auth-api/auth";

export function useLogout(){

    const logout = async () => {
        const logoutError = await logoutUser();
        return logoutError;
    }

    return {
        logout
    }
}