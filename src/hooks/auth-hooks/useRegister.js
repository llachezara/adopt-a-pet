import { registerUser } from "../../api/auth-api/auth"
import { createUser } from "../../api/user-api/user";

export function useRegister(){
    
    const register = async (email, password) =>{
        const registerUserInfo = await registerUser(email, password);

        if (registerUserInfo.error) {
            return console.log("REGISTER ERROR", registerUserInfo.error);
        }

        const createUserError = await createUser(registerUserInfo.id, email);
        console.log("CREATE USER ERROR", createUserError)
    }

    return {
        register
    }
}