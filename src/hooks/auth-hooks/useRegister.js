import { registerUser } from "../../api/auth-api/auth"

export function useRegister(){
    
    const register = async (email, password) =>{
        const registerUserInfo = await registerUser(email, password);
        console.log("User", registerUserInfo.id);
        console.log("Error", registerUserInfo.error);
    }

    return {
        register
    }
}