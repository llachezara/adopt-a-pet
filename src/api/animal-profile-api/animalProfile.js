import { db } from "../../config/firebase";
import { collection, addDoc, updateDoc, getDocs, getDoc, doc } from "firebase/firestore";

const animalProfileCollectionRef = collection(db, 'animal-profiles');

export async function createAnimalProfile(data, curretUserId) {
    const animalDocData = {
        ...data,
        adoptedFrom: "",
        isAdopted: false,
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

function getAnimalDocReference(animalId) {
    return doc(db, "animal-profiles", animalId);
}

export async function getOneAnimalProfile(animalId){
    try {
        const animalDocRef = getAnimalDocReference(animalId);
        const animalDocSnap = await getDoc(animalDocRef);

        if (!animalDocSnap.exists()) {
            throw new Error("Animal profile does not exist.");
        }

        const animalProfile = animalDocSnap.data();
        return { animalProfile, error:null }

    } catch (error) {
        return { error }
    }
}