import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function registerUser(email, password){

    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        
        return {id: newUser.user.uid, error: null};

    } catch (error) {
        return {id: null, error: error};
    }
}