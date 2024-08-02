import { db } from "../../config/firebase";
import { setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";

export async function createUser(uid, email) {
    try {
        await setDoc(doc(db, "users", uid), {
            email
        })

    } catch (error) {
        return error;
    }
};

function getUserDocReference(userId) {
    return doc(db, "users", userId);
}

export async function updateUserCreatedAnimalsList(currentUserId, animalProfileId, option){
    const currentUserDocRef = getUserDocReference(currentUserId);

    try {
        if (option == "add") {
            await updateDoc(currentUserDocRef, {
                createdAnimalProfiles:  arrayUnion(animalProfileId)
            });
            console.log("Updated");
        }
    } catch (error) {
        return error;
    }
}

