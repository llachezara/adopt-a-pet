import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import { createAnimalProfile } from "../../api/animal-profile-api/animalProfile"
import { updateUserCreatedAnimalsList } from "../../api/user-api/user";

export function useCreateAnimalProfile(){
    const user = useContext(AuthContext);

    const create = async (data) => {
        const animalProfileData = await createAnimalProfile(data, user.id);

        if (animalProfileData.error) {
            return animalProfileData.error;
        }

        const updateUserCreatedAnimalListError = await updateUserCreatedAnimalsList(user.id, animalProfileData.animalDocRef.id, "add");
        return updateUserCreatedAnimalListError;
    }

    return {
        create
    }
}