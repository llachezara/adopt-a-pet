import { db } from "../../config/firebase";
import { setDoc, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

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
        }else if(option == "remove"){
            await updateDoc(currentUserDocRef, {
                createdAnimalProfiles:  arrayRemove(animalProfileId)
            });
            console.log("Removed");
        }
    } catch (error) {
        return error;
    }
}

export async function updateUserAdoptedList(currentUserId, animalProfileId, option){
    const currentUserDocRef = getUserDocReference(currentUserId);
    console.log("In UPDATE ADOPT LIST", animalProfileId)
    try {
        if (option == "add") {
            await updateDoc(currentUserDocRef, {
                adoptedList: arrayUnion(animalProfileId)
            })
            console.log("Adopted from user.js");
        }else if(option == "remove"){
            await updateDoc(currentUserDocRef, {
                adoptedList: arrayRemove(animalProfileId)
            })
            console.log("ReMOVED from user ADOPTED LIST", animalProfileId);
        }

    } catch (error) {
        return error;
    }
}

