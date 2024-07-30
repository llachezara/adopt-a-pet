import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export async function registerUser(email, password) {

    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password);

        return { id: newUser.user.uid, error: null };

    } catch (error) {
        return { id: null, error: error };
    }
}

export async function loginUser(email, password){
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user)
    } catch (error) {
        return error;
    }
}

export function getUserAuthState(changeAuthState) {
    return auth.onAuthStateChanged((user) => {
        changeAuthState({
            email: user?.email,
            id: user?.uid,
            isPresent: !!user,
            loading: false
        });
    });
}

export async function logoutUser(){
    try {
        await signOut(auth);
    } catch (error) {
        return error;
    }
}