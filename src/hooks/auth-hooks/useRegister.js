import { registerUser } from "../../api/auth-api/auth"

export function useRegister(){
    
    const register = async (email, password) =>{
        const error = await registerUser(email, password);
        console.log("Error", error);
    }

    return {
        register
    }
}