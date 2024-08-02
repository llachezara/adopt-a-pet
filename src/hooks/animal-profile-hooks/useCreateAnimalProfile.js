import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import { createAnimalProfile } from "../../api/animal-profile-api/animalProfile"
import { updateUserCreatedAnimalsList } from "../../api/user-api/user";

export function useCreateAnimalProfile(){
    const user = useContext(AuthContext);

    const create = async (data) => {
        const animalProfileData = await createAnimalProfile(data, user.id);

        if (animalProfileData.error) {
            return console.log("ANIMAL PROFILE CREATION ERROR", animalProfileData.error);
        }

        const updateUserCreatedAnimalListError = await updateUserCreatedAnimalsList(user.id, animalProfileData.animalDocRef.id, "add");
        console.log("ERROR in update user's created animal profiles list", updateUserCreatedAnimalListError);
    }

    return {
        create
    }
}