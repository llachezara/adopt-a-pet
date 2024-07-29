import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function registerUser(email, password){
    console.log(auth.currentUser, "USER");
    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        console.log(newUser, "currentUser: ", auth.currentUser);
    } catch (error) {
        return error;
    }
}