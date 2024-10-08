import { db } from "../../config/firebase";
import { collection, addDoc, updateDoc, getDocs, getDoc, doc, deleteDoc, query, where, getCountFromServer } from "firebase/firestore";

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

export async function getAnimalProfilesCount(){
    const snapshot = await getCountFromServer(animalProfileCollectionRef);
    return snapshot.data().count;
}

export async function getAllAnimalProfiles() {
    try {
        const querySnapshot = await getDocs(animalProfileCollectionRef);
        const animalProfiles = [];
        querySnapshot.forEach((doc) => {
            animalProfiles.push(doc.data());
        });
        return { animalProfiles, error: null }
    } catch (error) {
        return { error }
    }
}

function getAnimalDocReference(animalId) {
    return doc(db, "animal-profiles", animalId);
}

export async function getOneAnimalProfile(animalId) {
    try {
        const animalDocRef = getAnimalDocReference(animalId);
        const animalDocSnap = await getDoc(animalDocRef);

        if (!animalDocSnap.exists()) {
            throw new Error("Animal profile does not exist.");
        }

        const animalProfile = animalDocSnap.data();
        return { animalProfile, error: null }

    } catch (error) {
        return { error }
    }
}

export async function adoptAnAnimal(animalId, currentUserId) {
    try {
        const animalDocRef = getAnimalDocReference(animalId);
        await updateDoc(animalDocRef, {
            adoptedFrom: currentUserId,
            isAdopted: true
        })

        return { error: null }
    } catch (error) {
        return { error }
    }
}

export async function deleteAnimalProfile(animalId) {
    try {
        const animalDocRef = getAnimalDocReference(animalId);
        await deleteDoc(animalDocRef);

        return {error: null}
    } catch (error) {
        return { error }
    }
}

export async function updateAnimalProfile(animalId, data){
    try {
        const animalDocRef = getAnimalDocReference(animalId);
        await updateDoc(animalDocRef, data);

        return {error: null}
    } catch (error) {
        return { error }
    }
}

export async function isUserAnimalOwner(animalId, currentUserId) {
    try {
        const q = query(animalProfileCollectionRef, where("id", "==", animalId), where("ownerId", "==", currentUserId));
        const querySnapshot = await getDocs(q);
        console.log("In UserAnimalOwner", querySnapshot);
        
        let documentExists = false;
        querySnapshot.forEach((doc) => {
            console.log("DOC", doc);
            documentExists = doc.exists();
        });

        return { error: null, isOwner: documentExists };
    } catch (error) {
        return { error, isOwner: false };
    }
}