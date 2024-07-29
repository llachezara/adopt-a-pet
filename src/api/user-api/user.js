import { db } from "../../config/firebase";
import { setDoc, doc } from "firebase/firestore";

export async function createUser(uid, email) {
    try {
        await setDoc(doc(db, "users", uid), {
            email
        })

    } catch (error) {
        return error;
    }
};