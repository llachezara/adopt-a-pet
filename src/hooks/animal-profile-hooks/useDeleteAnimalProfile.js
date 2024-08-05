import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { deleteAnimalProfile } from "../../api/animal-profile-api/animalProfile";
import { updateUserCreatedAnimalsList } from "../../api/user-api/user";

export function useDeleteAnimalProfile(){
    const currentUser = useContext(AuthContext);

    const deleteProfile = async (animalId) => {
        const deleteProfileData = await deleteAnimalProfile(animalId);
        if (deleteProfileData.error) {
            return deleteAnimalProfile.error;
        }

        const updateUserCreatedAnimalListError = updateUserCreatedAnimalsList(currentUser.id, animalId, "remove");
        if (updateUserCreatedAnimalListError) {
            return updateUserCreatedAnimalListError;
        }
    }

    return {
        deleteProfile
    }
}