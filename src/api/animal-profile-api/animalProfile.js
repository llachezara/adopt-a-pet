import { db } from "../../config/firebase";
import { collection, addDoc, updateDoc, getDocs } from "firebase/firestore";

const animalProfileCollectionRef = collection(db, 'animal-profiles');

export async function createAnimalProfile(data, curretUserId) {
    const animalDocData = {
        ...data,
        adoptedFrom: "",
        ownerId: curretUserId
    };

    if (animalDocData.name == "") {
        animalDocData.name = "No name";
    }

    try {
        const animalDocRef = await addDoc(animalProfileCollectionRef, animalDocData);
        await updateDoc(animalDocRef, { id: animalDocRef.id });

        return { animalDocRef, error: null };

    } catch (error) {
        return { error };
    }

}

export async function getAllAnimalProfiles() {
    try {
        const querySnapshot = await getDocs(animalProfileCollectionRef);
        const animalProfiles = [];
        querySnapshot.forEach((doc) => {
            animalProfiles.push(doc.data());
        });
         return { animalProfiles, error:null }
    } catch (error) {
        return { error }
    }
}