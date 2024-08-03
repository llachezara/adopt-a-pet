import { loginUser } from "../../api/auth-api/auth"

export function useLogin() {

    const login = async (email, password) => {

        const loginError = await loginUser(email, password);
        return loginError;
    }

    return {
        login
    }
}