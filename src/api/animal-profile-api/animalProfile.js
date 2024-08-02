import { db } from "../../config/firebase";
import { collection, addDoc, updateDoc } from "firebase/firestore";

const animalProfileCollectionRef = collection(db, 'animal-profiles');

export async function createAnimalProfile(data, curretUserId) {
    const animalDocData = {
        ...data,
        adoptedFrom: "",
        ownerId: curretUserId
    };

    try {
        const animalDocRef = await addDoc(animalProfileCollectionRef, animalDocData);
        await updateDoc(animalDocRef, {id: animalDocRef.id});

        return animalDocRef;
        
    } catch (error) {
        return error;
    }

}